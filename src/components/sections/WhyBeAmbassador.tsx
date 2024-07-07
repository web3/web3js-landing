
// import { IconArrowUpRight } from "@tabler/icons-react"
// import { useInView } from 'react-intersection-observer';
// import { sentenceVariant, letterVariant, splitText } from "@/styles/animations";
// import { motion, useAnimation } from 'framer-motion';
import { ChatBubbleLeftRightIcon, StarIcon, FaceSmileIcon, HeartIcon, ArrowTrendingUpIcon, BoltIcon } from '@heroicons/react/24/outline';

import { useEffect } from "react";
import SectionHeading from "../SectionHeading";

const cards = [
    {
        icon: <FaceSmileIcon />,
        title: 'Exclusive access',
        desc: 'to the web3.js core development team.',
    },
    {
        icon: <HeartIcon />,
        title: 'Get support',
        desc: 'expanding your local meetup community.',
    },
    {
        icon: <ChatBubbleLeftRightIcon />,
        title: 'Shape community',
        desc: '-driven initiatives within the web3.js ecosystem.',
    },
    {
        icon: <BoltIcon />,
        title: 'Network and make connections ',
        desc: 'with like-minded ambassadors.',
    },
    {
        icon: <ArrowTrendingUpIcon />,
        title: 'Boost your work',
        desc: 'through our social media and online platforms.',
    },
    {
        icon: <ChatBubbleLeftRightIcon />,
        title: 'Advance your career',
        desc: 'and establish yourself as a leader in blockchain technology.',
    },
    {
        icon: <StarIcon />,
        title: 'Build your personal brand',
        desc: 'through content creation and speaking opportunities.',
    },
]

export default function WhyBeAmbassador() {
//   const controls = useAnimation();

//   const [ref, inView] = useInView();

//   useEffect(() => {
//     if (inView) {
//       controls.start('visible');
//     }
//   }, [controls, inView]);

  
  return (
    <div  className="relative w-full md:min-h-[70vh]" id="beta-program">
      <div className="relative flex flex-col justify-center items-center py-14 lg:pt-32 px-8">
        <SectionHeading type="primary">Why be an ambassador</SectionHeading>
          <div className='grid md:grid-cols-2 gap-y-2 lg:grid-cols-3 py-8 gap-x-2 z-10 max-w-[85%] '>
          {cards.map((card, index) => (
            <div key={index} className='transition-all py-4 flex flex-col justify-center items-center px-5'>
              <div className='h-6 w-6 text-brand-400'>{card.icon}</div>
              <h2 className='mt-2 md:mt-7 text-center text-zinc-100 text-xl leading-6 max-w-[80%]'>{card.title}</h2>
              <h3 className='mt-1 md:mt-2 text-center text-zinc-500 text-lg leading-6 max-w-[80%]'>{card.desc}</h3>
            </div>
          ))}
        </div>
        </div>
    </div>
  )
}
