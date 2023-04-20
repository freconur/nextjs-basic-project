import Link from 'next/link'
import React, { useState } from 'react'
interface PropsMenuMobile {
  showModalNavbar: boolean
  // setShowModalNavbar: React.Dispatch<React.SetStateAction<boolean>>;
}
const MenuMobile = ({ showModalNavbar }: PropsMenuMobile) => {
  const [showSubmenu, setShowSubmenu] = useState<boolean>(false)
  return (
    // <ul className={`fixed rounded-lg translate-y-[-200%]  bg-verde botton-20 right-5 z-50 ${showModalNavbar && "translate-y-0 duration-300 transition"}`}> 
    <ul className={`overflow-hidden fixed rounded-lg bg-verde bottom-20 right-5 z-50`}>
      <li>
        <Link href="" className="text-blanco-cool hover:bg-cian text-xl font-semibold capitalize block leading-10 p-3  text-center">
          productos
        </Link>
        <ul className='bg-blanco-cool'>
          <li className='text-lg font-semibold capitalize block leading-10 p-1 text-center text-texto-title hover:bg-violeta hover:text-blanco-cool cursor-pointer duration-300 transition'>biombos</li>
          <li className='text-lg font-semibold capitalize block leading-10 p-1 text-center text-texto-title hover:bg-violeta hover:text-blanco-cool cursor-pointer duration-300 transition'>Bts</li>
          <li className='text-lg font-semibold capitalize block leading-10 p-1 text-center text-texto-title hover:bg-violeta hover:text-blanco-cool cursor-pointer duration-300 transition'>sublimados</li>
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