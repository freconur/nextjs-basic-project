import Link from 'next/link'
import React, { useState } from 'react'
interface PropsMenuMobile {
  showModalNavbar: boolean
  // setShowModalNavbar: React.Dispatch<React.SetStateAction<boolean>>;
}
const MenuMobile = ({ showModalNavbar }: PropsMenuMobile) => {
  const [showSubmenu, setShowSubmenu] = useState<boolean>(true)
  return (
    // <ul className={`fixed rounded-lg translate-y-[-200%]  bg-verde botton-20 right-5 z-50 ${showModalNavbar && "translate-y-0 duration-300 transition"}`}> 
    <ul className={`overflow-hidden fixed rounded-lg bg-verde bottom-20 right-5 z-50`}>
      <li className=''>
        <Link href="" onClick={() => setShowSubmenu(!showSubmenu)} className="bg-verde relative z-20 text-blanco-cool hover:bg-cian text-xl font-semibold capitalize block leading-10 p-3  text-center">
          productos
        </Link>
        <ul className={`relative z-10 bg-blanco-cool  ${!showSubmenu && ""}  ${showSubmenu && "hidden rotate-45 transition transform duration-300"}`}>
          <li className='text-texto-title hover:rotate-2  transform hover:bg-violeta hover:text-blanco-cool  duration-300 transition'>
            <Link href="/biombos" className='text-lg font-semibold capitalize block leading-10 p-1 text-center cursor-pointer'>
            biombos
            </Link>
          </li>
          <li className='text-texto-title hover:rotate-2  transform hover:bg-violeta hover:text-blanco-cool  duration-300 transition'>
            <Link href="/bts" className='text-lg font-semibold capitalize block leading-10 p-1 text-center cursor-pointer'>Bts</Link>
          </li>
          <li className='text-texto-title hover:rotate-2  transform hover:bg-violeta hover:text-blanco-cool  duration-300 transition'>
            <Link href="/kawaii" className='text-lg font-semibold capitalize block leading-10 p-1 text-center cursor-pointer'>kawaii</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link href="/contactanos" className="text-blanco-cool hover:bg-cian text-xl font-semibold capitalize block leading-10 p-3 text-center">
          contactanos
        </Link>
      </li>
      <li>
        <Link href="/nosotros" className="text-blanco-cool hover:bg-cian text-xl font-semibold capitalize block leading-10 p-3 text-center">
          nosotros
        </Link>
      </li>
    </ul>
  )
}

export default MenuMobile