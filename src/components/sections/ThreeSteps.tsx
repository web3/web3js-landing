
"use client"

import { CopyBlock, monokaiSublime } from 'react-code-blocks';
import sample from '../snippets';

export default function ThreeSteps() {
    const codeCSS = {
        fontSize: '16px',
        fontWeight: '600',
        padding: '16px',
        minHeight: '400px',
        maxHeight: '400px',
        overflowWrap: 'break-word',
        overflowY: 'scroll',
        borderRadius: '20px',
      };
  return (
    <div className="relative h-full w-full  md:min-h-[50vh]" id="download">
      <div className="relative flex flex-col justify-center px-8">
        <div className='grid grid-cols-1 md:grid-cols-2 gap-y-2 lg:grid-cols-3 py-8 gap-x-2 max-w-fit'>
            {/* step 1  */}
            <div className='max-w-[95%] lg:max-w-screen transition-all pt-2 pb-5 flex flex-col justify-center px-5 bg-cream rounded-3xl cursor-pointer hover:-translate-y-1 hover:brightness-75 opacity-80'>
                <h2 className='my-4 md:my-5 text-center text-gray-900 text-xl leading-7 max-w-[99%]'>Step 1. Import Web3 module.</h2>
                <CopyBlock
                text={sample['interact']}
                language='javascript'
                theme={monokaiSublime}
                wrapLongLines
                customStyle={codeCSS}
                />
            </div>
            {/* step 2  */}
            <div className=' max-w-[95%] lg:max-w-screen transition-all pt-2 pb-5 flex flex-col justify-center px-5 bg-cream rounded-3xl cursor-pointer hover:-translate-y-1 hover:brightness-75 opacity-80'>
                <h2 className='my-4 md:my-5 text-center text-gray-900 text-xl leading-7 max-w-[99%]'>Step 2. Initialize a Web3 provider.</h2>
                <CopyBlock
                    text={sample['listen']}
                    language='javascript'
                    theme={monokaiSublime}
                    wrapLongLines
                    customStyle={codeCSS}
                />
            </div>
            {/* step 3  */}
            <div className='max-w-[95%] lg:max-w-screen transition-all pt-2 pb-5 flex flex-col justify-center px-5 bg-cream rounded-3xl cursor-pointer hover:-translate-y-1 hover:brightness-75 opacity-80'>
                <h2 className='my-4 md:my-5 text-center text-gray-900 text-xl leading-7 max-w-[99%]'>Step 3. Start querying; i.e, current block number.</h2>
                <CopyBlock
                    text={sample['fetch']}
                    language='javascript'
                    theme={monokaiSublime}
                    wrapLongLines
                    customStyle={codeCSS}
                />
            </div>
        </div>
        </div>
    </div>
  )
}
