import Link from "next/link";
import React, { useState } from "react";
import NavbarModal from "../modal/NavbarModal";
import { RiMenuFill } from "react-icons/ri";
import MenuMobile from "@components/MenuMobile/MenuMobile";
const Navbar = () => {
  const [showModalNavbar, setShowModalNavbar] = useState(false);

  return (
    <>
      <nav className="relative z-20 w-full bg-violeta h-[60px] flex justify-between items-center px-2">
        {showModalNavbar && (
          <NavbarModal
            showModalNavbar={showModalNavbar}
            setShowModalNavbar={setShowModalNavbar}
          />
        )}
        <Link href="/" legacyBehavior>
          <a className="block w-[150px]">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/apiwaliky.appspot.com/o/waliky-logo.png?alt=media&token=5a55b529-fd73-44dd-8120-35b9e1a00ecf"
              alt="logo"
            />
          </a>
        </Link>
        <ul className="text-xl text-blanco-cool capitalize font-semibold flex">
          <li className="ml-5">
            <Link className="" href="/" legacyBehavior>
              inicio
            </Link>
          </li>
          <li className="ml-5">
            <Link className="" href="/about" legacyBehavior>
              nosotros
            </Link>
          </li>
        </ul>
        {/* menu burger flotante */}
      </nav>
        <div
          onClick={() => setShowModalNavbar(!showModalNavbar)}
          className={`${
            showModalNavbar && "rotate-180"
          } transition fixed z-40 xm:hidden rounded-[50%] bottom-5 right-5 overflow-hidden p-2 bg-blanco-cool drop-shadow-md cursor-pointer`}
        >
          <RiMenuFill className="text-4xl " />
        </div>
    </>
  );
};

export default Navbar;
