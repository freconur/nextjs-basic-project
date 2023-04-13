import SideBar from '@components/SidebarBts/SideBar'
import SideBarLeft from '@components/SidebarBts/SideBarLeft'
import React from 'react'
import LayoutMarginCenter from './LayoutMarginCenter'
import SideBarLeftKawaii from '@components/SidebarBts/SideBarKawaii'

type Props = {
  children: JSX.Element
}
const LayoutKawaii = ({ children }: Props) => {
  return (
    <LayoutMarginCenter>
      <div className='relative md:hidden'>
        {children}
      </div>
      <div className='relative hidden md:grid md:md:grid-cols-gridSidebarMd md:gap-10'>
        <SideBarLeftKawaii />
        {children}
      </div>
    </LayoutMarginCenter>
  )
}

export default LayoutKawaii