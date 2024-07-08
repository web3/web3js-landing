
import React, {ReactNode} from 'react'
import {CheckCircleIcon } from "@heroicons/react/24/outline";
type Props = {
    children?: any;
}

export default function TextWithCheckIcon({children }: Props) {
    return (
        <div className="flex flex-row justify-center py-4 gap-x-1 text-left text-gray-100">
            <CheckCircleIcon
                className="relative mr-2 h-12 w-12 text-brand-400"
                aria-hidden="true"
            />
            <div className='w-full'>
              <p className='text-xl text-zinc-400'>{children}</p>
            </div>
        </div>
    )
}