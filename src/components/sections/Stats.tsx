import SectionHeading from "../SectionHeading"
  
  export default function Stats() {
    return (
      <div className=" py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-8xl lg:max-w-none">
            <div className="flex justify-between">
              <SectionHeading type='primary'>Why Web3.js?</SectionHeading>
              <p className="mt-4 text-right max-w-1/2 lg:max-w-[50%] text-2xl leading-8 text-zinc-400">
              Web3.js was established in 2014, making it the oldest web3 library. With extensive documentation, an active community and modular design, Web3.js is powerful and easy-to-use. 
              </p>
            </div>

          </div>
        </div>
      </div>
    )
  }
  