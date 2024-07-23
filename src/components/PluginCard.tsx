import Button from "./Button";
import { StarIcon } from "@heroicons/react/24/outline"; 

type Props = {
    name: string;
    isFeatured: boolean | undefined;
    description?: string;
    downloadsCount?: string | number;
    authors?: string | string[];
    downloadUrl?: string;
    error?: string;

}
export default function PluginCard({isFeatured, name, description, authors, downloadUrl, error, downloadsCount }: Props) {
    return (
        <div>
            <div className='transition-all py-2 min-h-[250px] flex flex-col justify-start px-5 bg-plugin-bg rounded-2xl opacity-80'>
            {isFeatured ? <div className='flex justify-end'>
                <div className='bg-zinc-900 border-zinc-800 border p-3 rounded-lg'>
                    <StarIcon className='text-brand-400 h-6 w-6' />
                </div>
                </div> : null }
                <a href={downloadUrl} target="_blank" rel="noopener noreferrer" className='mt-2 md:mt-7 text-gray-100 text-2xl font-semibold leading-7 hover:brightness-50'>{name}</a>
                {description ? <h3 className='mt-2 text-gray-300 text-md leading-6'>{description}</h3> : null }
            </div>
            {!error && (
            <div className='flex justify-between mt-2 mx-2'>
                <div className="flex flex-col">
                    {authors ? <p className='text-lg text-gray-50 font-semibold mb-1'>{authors}</p> : <p>Unknown</p>}
                {/* <p className='text-md text-zinc-400'>{downloadsCount} Downloads</p> */}
              </div>
              <div className='cursor-pointer mt-1'>
                <Button type="pluginDownload" href={downloadUrl}>Download</Button>
              </div>
            </div>
            )}
      </div>
    )
}