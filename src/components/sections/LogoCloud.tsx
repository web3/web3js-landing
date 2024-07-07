/* eslint-disable @next/next/no-img-element */

export const companiesList = [
    {
        'name': 'Ethereum',
        'imgUrl': '/logos/eth.png',
    },
    {
        'name': 'Zksync',
        'imgUrl': '/logos/zksync.png',
    },
    {
        'name': 'Chainlink',
        'imgUrl': '/logos/chainlink.png',
    },
    {
        'name': 'Chainstack',
        'imgUrl': '/logos/chainstack.png',
    },
    {
        'name': 'ENS',
        'imgUrl': '/logos/ens.png',
    },
    {
        'name': 'Near',
        'imgUrl': '/logos/near.png',
    },
    {
        'name': 'Optimism',
        'imgUrl': '/logos/optimism.png',
    },
  ];

export default function LogoCloud() {
    return (
      <div className=" py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className='text-md text-gray-300 text-center py-2'>Trusted by</p>
          <div className="mx-auto grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-7">
            {companiesList ? companiesList.map((item, index) => (
                <div key={index}>
                  <img
                  alt={item.name}
                  src={item.imgUrl}
                  className="max-h-12 w-full object-contain lg:col-span-1"
                /></div>
            )) : <div></div>}
          </div>
        </div>
      </div>
    )
  }