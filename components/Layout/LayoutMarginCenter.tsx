import React from 'react'

type Props = {
    children: JSX.Element[] | JSX.Element
}
const LayoutMarginCenter = ({ children }: Props) => {
    return (
        <div className='w-[1200px] m-auto m-5'>
            {children}
        </div>
    )
}

export default LayoutMarginCenter