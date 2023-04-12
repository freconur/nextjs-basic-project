import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '@components/Footer/Footer'

type Props ={
    children: JSX.Element
}
const Layout= ({children}:Props) => {
  return (
    <div className='grid grid-rows-layoutGlobal min-h-[100vh]'>
        <Navbar />
        {children}
        <Footer/>
    </div>
  )
}

export default Layout