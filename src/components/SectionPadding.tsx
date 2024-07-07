import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode | any;
    type: 'default' | 'thinner' | 'thin';
    className?: string;
}

export default function PagePadding({type, className, children}: Props) {

    let outerStyles; 
    let innerStyles; 

    if (type === 'default') {
        outerStyles = `relative h-full w-full  md:min-h-[50vh]`;
        innerStyles = `elative flex flex-col justify-center py-14 px-8`
    }

    return (
        <div className={`${className} ${outerStyles}`}>
            <div className={`${innerStyles}`}>
                {children}
            </div>
        </div>
    )
}