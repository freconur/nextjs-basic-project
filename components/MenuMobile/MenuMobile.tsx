import Link from 'next/link'
import React from 'react'
interface PropsMenuMobile{
    showModalNavbar: boolean
    // setShowModalNavbar: React.Dispatch<React.SetStateAction<boolean>>;
}
const MenuMobile = ({showModalNavbar}:PropsMenuMobile) => {
  return (
        // <ul className={`fixed rounded-lg translate-y-[-200%]  bg-verde botton-20 right-5 z-50 ${showModalNavbar && "translate-y-0 duration-300 transition"}`}> 
        <ul className={`fixed rounded-lg bg-verde bottom-20 right-5 z-50`}>
            <li>
              <Link href="/" legacyBehavior>
                <a className="text-blanco-cool hover:bg-cian font-semibold capitalize block leading-10 px-3 ">productos</a>
              </Link>
            </li>
            <li>
              <Link href="/" legacyBehavior>
                <a className="text-blanco-cool hover:bg-cian font-semibold capitalize block leading-10 px-3">contactanos</a>
              </Link>
            </li>
            <li>
              <Link href="/" legacyBehavior>
                <a className="text-blanco-cool hover:bg-cian font-semibold capitalize block leading-10 px-3">nosotros</a>
              </Link>
            </li>
          </ul>
  )
}

export default MenuMobile