import SideBar from '@components/SidebarBts/SideBar'
import React from 'react'

type Props = {
    children: JSX.Element
}
const LayoutBts = ({children}:Props) => {
  return (
    <div className='relative'>
        <SideBar/>
        {children}
    </div>
  )
}

export default LayoutBts