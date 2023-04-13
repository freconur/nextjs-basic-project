import Link from "next/link";
import React, { useState } from "react";
import NavbarModal from "../modal/NavbarModal";
import { RiMenuFill } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";
import MenuMobile from "@components/MenuMobile/MenuMobile";
const Navbar = () => {
  const [showModalNavbar, setShowModalNavbar] = useState(false);

  return (
    <>
      <nav className="relative z-50 w-full bg-violeta h-[60px] flex justify-between items-center px-2 shadow-md">
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
        <ul className="text-xl hidden text-blanco-cool capitalize font-semibold md:flex gap-[20px]">
          <li className="ml-[50px] overflow-hidden rounded-full hover:shadow-xl ">
            <Link href="/" legacyBehavior>
              <a className="flex items-center justify-center leading-[50px] duration-500 transition ease-out  pl-4 pr-1 border-0  hover:bg-verde hover:rounded-full hover:h-full hover:w-full">
                productos
                <RiArrowDropDownLine className="mt-[6px] w-8 h-8" />
              </a>
            </Link>
          </li>
          <li className="overflow-hidden rounded-full hover:shadow-xl">
            <Link className="" href="/about" legacyBehavior>
              <a className="block leading-[50px] duration-500 transition ease-out px-4 border-0  hover:bg-verde hover:rounded-full hover:h-full hover:w-full">nosotros</a>
            </Link>
          </li>
          <li className="overflow-hidden rounded-full hover:shadow-xl">
            <Link className="" href="/about" legacyBehavior>
              <a className="block leading-[50px] duration-500 transition ease-out px-4 border-0  hover:bg-verde hover:rounded-full hover:h-full hover:w-full">contactanos</a>
            </Link>
          </li>
        </ul>
        {/* menu burger flotante */}
      </nav>
      <div
        onClick={() => setShowModalNavbar(!showModalNavbar)}
        className={`${
          showModalNavbar && "rotate-180"
        } transition fixed z-40 md:hidden rounded-[50%] bottom-5 right-5 overflow-hidden p-2 bg-blanco-cool drop-shadow-md cursor-pointer`}
      >
        <RiMenuFill className="text-4xl " />
      </div>
    </>
  );
};

export default Navbar;
