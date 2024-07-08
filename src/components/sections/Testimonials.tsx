/* eslint-disable @next/next/no-img-element */
import SectionHeading from "../SectionHeading"

export const testimonials = [
    {
        imgUrl: '/logos/chainstack.png',
        text: '“At Chainstack, Web3.js has been instrumental in developing our RPC API documentation and tutorials. Its robust features and seamless integration allow us to showcase use cases effectively, enabling developers to leverage the full potential of blockchain technology quickly. Web3.js is a foundational tool that enhances our ability to support developers in building scalable and innovative applications on multiple blockchains.”'
    },
    {
        imgUrl: '/logos/namespace.png',
        text: '“Developing the Namespace ENS plugin for Web3.js was a smooth experience. Developer docs are concise and easy to follow, and their SDK made the process even more frictionless. On top of that, the DevRel team was always available to provide any support if needed.”'
    },
    {
        imgUrl: '/logos/defisaver.png',
        text: '“We have been relying on Web3.js to build DeFi Saver since 2020. With us having built a lot of custom infra in-house, Web3.js had been a great tool for this purpose. The API has been stable and it provided us enough visibility and control over the entire stack. It has also been here for a while and all the tooling around it is stable and ready, so theres hardly ever any issues.”'
    },
]
export default function Testimonials() {

  return (
    <div className="relative h-full w-full  md:min-h-[50vh]" id="download">
      <div className="relative flex flex-col justify-center py-14 px-8">
        <SectionHeading type="primary">Testimonials</SectionHeading>
        <div className='grid md:grid-cols-2 gap-y-2 lg:grid-cols-3 py-8 gap-x-2 '>
            {testimonials.map((card, index) => (
                <div key={index} className='transition-all py-10 flex flex-col justify-start px-5 bg-neutral-900 rounded-3xl cursor-pointer hover:-translate-y-1 hover:brightness-75 opacity-80'>
                    <h3 className='mt-2 text-gray-300 text-lg leading-7 max-w-[90%]'>{card.text}</h3>
                    <div>
                        <img className="mt-8 max-w-[150px] pb-3" src={card.imgUrl} alt={'web3js testimonial' + index} />
                    </div>
                </div>
            ))}
        </div>
        </div>
    </div>
  )
}
