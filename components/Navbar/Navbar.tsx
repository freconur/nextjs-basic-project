import Link from "next/link";
import React, { useEffect, useState } from "react";
import NavbarModal from "../modal/NavbarModal";
import { RiMenuFill } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";
import MenuMobile from "@components/MenuMobile/MenuMobile";
import { LOGO_WALIKY } from "ImagesLink/imagesLink";
import Image from "next/image";
import Logo from '../../assets/waliky-logo.png'

function useWindowsSize() {
  const [size, setSize] = useState([window.innerHeight, window.innerWidth]);
  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerHeight, window.innerWidth]);
    };
    window.addEventListener("resize", handleResize);
  }, []);
  return size;
}

const Navbar = () => {
  const [height, width] = useWindowsSize();
  const [showModalNavbar, setShowModalNavbar] = useState(false);
  return (
    <>
      <nav className="relative z-50 w-full bg-violeta h-[60px] flex justify-between items-center px-2 shadow-md">
        {showModalNavbar && width < 768 && (
          <NavbarModal
            showModalNavbar={showModalNavbar}
            setShowModalNavbar={setShowModalNavbar}
          />
        )}
        <Link href="/">
          {/* <a className="block w-[150px]"> */}
          <Image
            className="w-[150px]"
            src={Logo}
            alt="logo"
            width={120}
            priority
            placeholder="blur"
          />
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
      {/* <div> */}
      <RiMenuFill onClick={() => setShowModalNavbar(!showModalNavbar)}
        className={`${showModalNavbar && "rotate-180 transition duration-300"
          } transition duration-300 fixed w-[50px] h-[50px] z-50 md:hidden rounded-[50%] bottom-5 right-5 overflow-hidden p-2 bg-blanco-cool drop-shadow-md cursor-pointer text-4xl`} />
      {/* <RiMenuFill className="text-4xl " /> */}
      {/* </div> */}

    </>
  );
};

export default Navbar;
