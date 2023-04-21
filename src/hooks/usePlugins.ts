import { m } from 'framer-motion';
import { getPackageManifest, getPackageDownloads } from 'query-registry';
import { useEffect, useState } from 'react';

export interface PluginMetadata {
  name: string;
  description?: string;
  version: string;
  author?: string;
  homepage?: string;
  donwloads: number;
  license?: string;
}

const pluginNames = [
  "@chainsafe/web3.js-chainlink-plugin"
]

export interface PluginsData {
  loading: boolean;
  pluginsList: PluginMetadata[];
  error?: string;
}
export const usePlugins = (): PluginsData => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | undefined>(undefined);
  const [pluginsList, setPluginList] = useState<PluginMetadata[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const plugins = await Promise.all(
          pluginNames.map(async (name) => {
            const manifest = await getPackageManifest({ name });
            const downloads = await getPackageDownloads({ name });
            const plugin: PluginMetadata = {
              name: manifest.name,
              version: manifest.version,
              author: manifest.author?.name,
              homepage: manifest.homepage,
              donwloads: downloads.downloads,
              license: manifest.license,
              description: manifest.description,
            }
            return plugin;
          }))
        setLoading(false);
        setPluginList(plugins);
      }
      catch (e) {
        setLoading(false);
        setError("Error loading plugins");
      }
    }
    )();
  }, []);

  return {
    loading,
    pluginsList,
    error
  };
};
