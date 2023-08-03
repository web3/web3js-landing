import { getPackageManifest, getPackageDownloads } from 'query-registry';
import { useEffect, useState } from 'react';
import pluginList from '../pluginList.json';

export interface PluginMetadata {
  name: string;
  description?: string;
  version?: string;
  author?: string;
  homepage?: string;
  donwloads?: number;
  license?: string;
  isFeatured?: boolean;
}

const pluginsJSON = pluginList.map((plugin) => {
  return {
    name: plugin.name,
    isFeatured: plugin.isFeatured === "true"
  }
});

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
          pluginsJSON.map(async (pluginsJSON) => {
            const manifest = await getPackageManifest({ name: pluginsJSON.name });
            const downloads = await getPackageDownloads({ name: pluginsJSON.name });
            const plugin: PluginMetadata = {
              name: manifest.name,
              version: manifest.version,
              author: manifest.author?.name,
              homepage: manifest.homepage,
              donwloads: downloads.downloads,
              license: manifest.license,
              description: manifest.description,
              isFeatured: pluginsJSON.isFeatured
            }
            return plugin;
          }))
        setLoading(false);
        setPluginList(plugins);
      }
      catch (e) {
        setLoading(false);
        setError("Error loading plugin details");
        setPluginList(pluginsJSON.map((plugin) => {
          return {
            name: plugin.name,
            isFeatured: plugin.isFeatured
          }
        })
        );
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
