import SideBar from '@components/SidebarBts/SideBar'
import SideBarLeft from '@components/SidebarBts/SideBarLeft'
import React from 'react'
import LayoutMarginCenter from './LayoutMarginCenter'

type Props = {
  children: JSX.Element
}
const LayoutBts = ({ children }: Props) => {
  return (
    <LayoutMarginCenter>
      <div className='relative md:hidden'>
        <SideBar />
        {children}
      </div>
      <div className='relative hidden md:grid md:md:grid-cols-gridSidebarMd md:gap-10'>
        <SideBarLeft />
        {children}
      </div>
    </LayoutMarginCenter>
  )
}

export default LayoutBts