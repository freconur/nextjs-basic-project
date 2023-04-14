import React from 'react'

type Props = {
    children: JSX.Element[] | JSX.Element
}
const LayoutMarginCenter = ({ children }: Props) => {
    return (
        <div className='w-full xl:w-[1200px] xl:mx-auto'>
        {/* <div className='w-full'> */}
            {children}
        </div>
    )
}

export default LayoutMarginCenter