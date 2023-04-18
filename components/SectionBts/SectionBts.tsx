import LayoutMarginCenter from "@components/Layout/LayoutMarginCenter";
import { IMAGES_BTS } from "ImagesLink/imagesLink";
import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";

const SectionBts = () => {
  return (
    <LayoutMarginCenter>
      <section className="w-full my-10 p-3 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {/* <h1 className="text-3xl uppercase font-extrabold text-center text-cyan-600 my-6">
          productos bts
        </h1> */}
        {/* <div className=""> */}
        {/* <div className="grid grid-cols-1 gap-5 sm:grid-cols-2"> */}
          {/* <div> */}
          {/* <div className="flex items-center justify-center w-full relative"> */}
            <Image
              src={IMAGES_BTS.btsPage.section}
              width={1080}
              height={1080}
              alt="bts"
              priority={true}
              objectFit="cover"
            />
          {/* </div> */}
          <div className="grid place-content-center h-full">
            <p className="text-xl text-texto sm:text-xl md:text-2xl cs:text-2xl">
              {/* <p className="text-xl text-texto"> */}
              Si te consideras una o un verdadero fan de BTS entonces es casi
              obligatorio que te des una vuelta por nuestra tienda del grupo K-POP
              del momento, estamos seguros que te llevaras una gran sorpresa con
              lo que podras encontrar, dale click al boton de abajo y sorprendete.
            </p>
            <div className="mt-5 bg-">
              <Link href="/bts" legacyBehavior>
                <a className="inline-block cursor-pointer rounded-lg h-12 bg-fuxia hover:opacity-90 py-3 px-4 hover:-translate-y-0.5 tracking-wider uppercase transform transition focus:ring-fuchsia-400 focus:ring font-semibold text-blanco-cool shadow-lg">
                  ver productos
                </a>
              </Link>
            </div>
          </div>
        {/* </div> */}
      </section>
    </LayoutMarginCenter>
  );
};

export default SectionBts;
