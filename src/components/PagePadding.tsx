import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode | any;
}


export default function PagePadding({children}: Props) {
    return (
        <div className="mx-4 lg:mx-12 lg:max-w-[70%] xl:translate-x-1/2 xl:relative xl:left-1/2">
            {children}
        </div>
    )
}