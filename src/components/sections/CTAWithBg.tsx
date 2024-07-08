import React, { ReactNode } from 'react';
import SectionHeading from '../SectionHeading';

type Props = {
    title: string;
}

export default function CTAWithBg({title}: Props) {
  

  return (
    <div className='relative h-full w-full max-w-screen-xl mx-auto py-4'>
      <div className="relative grid md:grid-cols-2 px-8 md:py-14">
        <div className='relative flex flex-col justify-center md:pt-0 items-start py-4'>
          <SectionHeading>
            {title}
          </SectionHeading>
        </div>
        <div className='grid content-center justify-center gap-x-2 gap-y-2 grid-cols-8 md:grid-cols-10'>
        </div>
      </div>
    </div>
  )
};