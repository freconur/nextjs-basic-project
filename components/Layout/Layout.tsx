import React from 'react'
import Navbar from '../Navbar/Navbar'

type Props ={
    children: JSX.Element
}
const Layout= ({children}:Props) => {
  return (
    <div>
        <Navbar />
        {children}
    </div>
  )
}

export default Layout