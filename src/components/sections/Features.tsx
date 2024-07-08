
"use client"

import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from "react";
import { ChatBubbleLeftRightIcon, ArrowsRightLeftIcon, RocketLaunchIcon, CircleStackIcon, BellIcon } from '@heroicons/react/24/outline';
import SectionHeading from "../SectionHeading";

const cards = [
    {
        icon: <BellIcon />,
        title: 'Abstractions over the JSON-RPC API',
        desc: 'Simplifying interaction for your Developer Experience.',
    },
    {
        icon: <CircleStackIcon />,
        title: 'Dynamic contract types and full API in TypeScript',
        desc: 'Enforced with strict types for enhanced security and safety.',
    },
    {
        icon: <ArrowsRightLeftIcon />,
        title: 'Most efficient ABI Encoder & Decoder',
        desc: 'Include only what you need during bundling for optimized performance.',
    },
    {
        icon: <ChatBubbleLeftRightIcon /> ,
        title: 'ESM and CJS module builds ',
        desc: 'Support for both ECMAScript module and CommonJS module builds for flexible integration with various project setups.',
    },
    {
        icon: <ChatBubbleLeftRightIcon />,
        title: 'Custom Output formatters',
        desc: 'Format any returned value to be a string, number, BigInt, etc., providing flexibility in handling output data.',
    },
    {
        icon: <RocketLaunchIcon />,
        title: 'Language Aligned',
        desc: 'to the official Ethereum terminology',
    },
]

export default function Features() {
  const controls = useAnimation();

  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <div  className="relative w-full md:min-h-[70vh]" id="beta-program">
      <div className="relative flex flex-col items-center justify-center py-14 lg:pt-32 px-8">
        <SectionHeading type="primary">Web3.js Features</SectionHeading>

          <div className='grid md:grid-cols-2 gap-y-2 content-center lg:grid-cols-3 py-8 gap-x-2 z-10 max-w-[85%]'>
          {cards.map((card, index) => (
            <div key={index} className='transition-all py-10 flex flex-col justify-start px-5 bg-neutral-900 rounded-3xl opacity-90'>
              <div className='flex justify-between'>
                <div className='h-6 w-6 text-brand-400'>{card.icon}</div>
              </div>
              <h2 className='mt-2 md:mt-7 text-neutral-200 text-2xl font-semibold leading-6 max-w-[80%]'>{card.title}</h2>
              <h3 className='mt-2 md:mt-7 text-zinc-400 text-xl leading-6 max-w-[80%]'>{card.desc}</h3>
            </div>
          ))}
        </div>
        </div>
    </div>
  )
}
