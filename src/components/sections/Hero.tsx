/* eslint-disable @next/next/no-img-element */
import Button from '../Button';
import SectionHeading from '../SectionHeading';

export default function Hero() {
  return (
    <div className="relative py-24 md:py-0 lg:h-screen xl:h-full w-full px-4 md:px-8 ">
      <div className="relative flex flex-col max-w-7xl lg:py-48">
        <div className='mt-10 flex flex-col md:grid md:grid-cols-1 lg:grid-cols-2 justify-start items-start lg:mt-0'>
         <div className='flex flex-col gap-y-5'>         
          <SectionHeading type="primary">
            Build dApps on any EVM Chain with TypeScript Libraries
          </SectionHeading>
          <div>
            <Button className='text-white py-4 px-8' type="primary" href="https://www.npmjs.com/package/web3">npm i web3</Button>
            <div className='mt-6 px-2 flex flex-row align-center gap-x-2'><img className='h-5 w-5' src="/cs.png" alt="ChainSafe Logo, maintainer of web3js"/>
            <p className='text-md text-gray-300'>{" "} Maintained by ChainSafe</p>
            </div>
          </div>
          </div>
          <div className='flex flex-col w-full pt-8 lg:pt-0'>
            <img className='w-auto lg:min-w-[800px]' src='/hero.png' alt='Abstract pattern of gemoetric shapes' />
          </div>
        </div>
      </div>
    </div>
  )
}
