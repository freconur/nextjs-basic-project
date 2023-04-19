import LayoutMarginCenter from "@components/Layout/LayoutMarginCenter";
import { IMAGES_KAWAII } from "ImagesLink/imagesLink";
import Image from "next/image";
import Link from "next/link";
import Kawaii from "../../assets/sections/kawaii.jpg"
import React from "react";
import {imageBlur} from "../../ImagesLink/blurImage"
const SectionKawaii = () => {
  return (
    <LayoutMarginCenter>

    <section className="w-full my-10 p-3 relative">
      <h1 className="text-3xl uppercase font-extrabold text-center text-cyan-600 my-6">kawaii</h1>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 w-full relative">
        <div className="items-center justify-center w-full relative">
          <Image
            src={Kawaii}
            width={1080}
            height={1080}
            // layout="responsive"
            // fill
            blurDataURL={imageBlur}
            placeholder="blur"
            alt="bts"
          />
        </div>
        <div className="grid place-content-center">
          <p className="text-xl text-texto sm:text-xl md:text-2xl cs:text-2xl">
            {/* <p className="text-xl text-texto"> */}
            Hemos creado un espacio con productos kawaii, si eres de los que le
            gusta las cosas curiosas lindas y bonitas en colores y animales,
            entonces te encantara lo que veras aqui, echale un vistazo, de
            seguro que encontraras algo que llame tu atencion.
          </p>
          <div className="mt-5 bg-">
            <Link href="/kawaii" prefetch={false} legacyBehavior>
              <a className="inline-block cursor-pointer rounded-lg h-12 bg-fuxia hover:opacity-90 py-3 px-4 hover:-translate-y-0.5 tracking-wider uppercase transform transition focus:ring-fuchsia-400 focus:ring font-semibold text-blanco-cool shadow-lg">
                ver productos
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
    </LayoutMarginCenter>
  );
};

export default SectionKawaii;
