import React, { useMemo } from "react";
import { PluginsData } from "../../hooks/usePlugins";
import PluginCard from "../PluginCard";
import SectionHeading from "../SectionHeading";

interface IPluginsList {
  pluginData: PluginsData;
}

const PluginsList: React.FC<IPluginsList> = ({ pluginData }) => {
  const { loading, error, pluginsList } = pluginData;

  const memoizedPluginsList = useMemo(() => {
    return pluginsList.sort((a, b) => Number(b.isFeatured) - Number(a.isFeatured))
  }, [pluginsList]);

  if (loading) return (<div className='mt-1 text-gray-500'>loading plugin details...</div>)

  return (
    <div className='mx-2 md:mx-4 lg:mx-6'>
        <img src="/accent-banner.png" className='max-w-xl py-8'/>
        <SectionHeading type="secondary">Web3js Plugins</SectionHeading>
      {error && <div className='mt-1 text-gray-500'>{error}</div>}
      <div className='flex flex-col justify-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-8 gap-x-3 gap-y-8 z-10 max-w-[85%]'>
        {memoizedPluginsList.map((plugin) =>
        <PluginCard
            key={plugin?.name}
            isFeatured={plugin?.isFeatured}
            name={plugin?.name}
            description={plugin?.description}
            authors={plugin?.author}
            downloadsCount={plugin?.donwloads}
            downloadUrl={"https://npmjs.com/package/" + plugin.name}
        /> )}
        </div>
      </div>
    </div>
  )
}

export default PluginsList;