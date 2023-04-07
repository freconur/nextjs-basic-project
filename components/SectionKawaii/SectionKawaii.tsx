import Image from "next/image";
import Link from "next/link";
import React from "react";

const SectionKawaii = () => {
  return (
    <section className="w-full my-10 p-3">
      <h1 className="text-3xl uppercase font-bold text-center">kawaii</h1>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 w-full">
        <div className="flex items-center justify-center w-full">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/apiwaliky.appspot.com/o/kawaii%2Fbanner-kawaii%2Fkawaii-banner.png?alt=media&token=bb75fd4a-8fed-4f73-a2aa-84b81b0c8808"
            width={500}
            height={500}
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
            <Link href="/kawaii" legacyBehavior>
              <a className="inline-block cursor-pointer rounded-lg h-12 bg-fuxia hover:opacity-90 py-3 px-4 hover:-translate-y-0.5 tracking-wider uppercase transform transition focus:ring-fuchsia-400 focus:ring font-semibold text-blanco-cool shadow-lg">
                ver productos
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionKawaii;
