import LayoutMarginCenter from "@components/Layout/LayoutMarginCenter";
import { GetStaticProps } from "next";
import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";
import { getCilindrosBiombosThemes } from "reducer/Biombos";

export const getStaticProps: GetStaticProps = async () => {
  const product: Biombos[] = await getCilindrosBiombosThemes();
  return {
    props: { product },
  };
};
const biombos = ({ product }: { product: Biombos[] }) => {
  return (
    <LayoutMarginCenter>
      <div className="mt-10">
        <div className="text-center">
          <h1 className="capitalize text-4xl text-texto font-bold">
            cilindros y biombos para fiestas
          </h1>
          <p className="text-2xl text-texto-title my-5">
            Reserva tus ciclindros y biombos para tu fiesta a unos precios
            increibles, echale un ojo a nuestras tematicas disponibles.
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-5 my-10 mx-5 sm:grid-cols-2">
          {product?.map((item) => {
            return (
              <li className="overflow-hidden rounded-lg bg-blanco-cool shadow-xl tematicas-disponibles__item">
                <Link href={`/biombos/${item.id}`}>
                  <Image
                    layout="responsive"
                    src={`${item.image}`}
                    alt={`${item.name} `}
                    width={150}
                    height={150}
                  />
                  <h3 className="tematicas-disponibles__name p-5 text-center text-xl xm:text-2xl  text-texto-title capitalize font-bold">
                    {item.theme}
                  </h3>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </LayoutMarginCenter>

  );
};

export default biombos;
