import SectionHeading from "../SectionHeading"
import TextWithCheckIcon from "../TextWithCheckIcon"

const stats = [
    'Deploy and interact with smart contracts as TS/JS objects',
    'Subscribe to specific on-chain or smart contract events',
    'Interact with the Ethereum Name Service (ENS)',
    'Create and import accounts, sign data and transactions',
    'Get block and state information from Ethereum nodes',
    'Have access to utilities with built-in helpers for Ethereum dApps and web3 packages',
  ]
  
  export default function YouCan() {
    return (
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
                <SectionHeading type="primary">With Web3.js, you can</SectionHeading>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden text-center sm:grid-cols-2 lg:grid-cols-3">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col py-4 px-5">
                  <TextWithCheckIcon>{stat}</TextWithCheckIcon>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }
  