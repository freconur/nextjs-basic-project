import MenuMobile from "@components/MenuMobile/MenuMobile";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
interface PropsNavbarModal {
  showModalNavbar: boolean;
  setShowModalNavbar: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuListModal = ({
  showModalNavbar,
}: PropsNavbarModal) => {
  let container;
  if (typeof window !== "undefined") {
    container = document.getElementById("portal-navbar");
  }
  return container
    ? createPortal(
        <div className=" bg-modal  backdrop-blur-[0.5px] fixed inset-0 z-30">
        <MenuMobile  showModalNavbar={showModalNavbar} />

        </div>,
        container
      )
    : null;
};

export default MenuListModal;


