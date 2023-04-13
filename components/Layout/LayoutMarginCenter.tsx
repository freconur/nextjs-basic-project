import React from 'react'

type Props = {
    children: JSX.Element[] | JSX.Element
}
const LayoutMarginCenter = ({ children }: Props) => {
    return (
        <div className='w-full xl:w-[1200px] xl:m-5'>
        {/* <div className='w-full'> */}
            {children}
        </div>
    )
}

export default LayoutMarginCenter