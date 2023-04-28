import LayoutTazasSublimadas from '@components/Layout/LayoutTazasSublimadas'
import ProductsCard from '@components/ProductsCard/ProductsCard'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import React from 'react'
import { getTazasPersonzalidas } from 'reducer/TazasPersonalizadas'
import Tazas from "../../assets/tazas-personalizadas/tazas-personalizas-regala-especial.jpg"

export const getServerSideProps: GetStaticProps = async () => {
  const products: Products[] = await getTazasPersonzalidas()
  return {
    props: { products }
  }
}

const plantillas = ({ products }: { products: Products[] }) => {
  return (
    <LayoutTazasSublimadas>
      <div className='p-5'>
        <h1 className='text-verde capitalize font-semibold text-center mb-5 md: text-4xl'>Tazas Personalizadas: El detalle que te conecta con tus momentos más especiales</h1>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
          <Image className='' src={Tazas} width={500} height={300} layout='responsive' alt="tazas-personalizas-regala-especial" />
          <p className='text-texto-title text-xl text-left'>Las tazas son un objeto cotidiano que nos acompaña en nuestra rutina diaria. Ya sea para disfrutar de una taza de café en la mañana, compartir una infusión con amigos o simplemente disfrutar de una bebida caliente durante una tarde lluviosa. Sin embargo, ¿alguna vez te has detenido a pensar en la magia que puede haber detrás de una taza personalizada?, te contamos todo lo que necesitas saber sobre las tazas personalizadas y por qué pueden ser el detalle que te conecta con tus momentos más especiales.</p>
        </div>
      </div>
      <div className='p-5'>
        <h3 className='text-texto-title text-xl font-semibold my-5'>Aqui te mostramos algunos de nuestros trabajos en tazas personalizadas:</h3>
        <ProductsCard products={products} currentPage={"plantillas"} items={4} />
        <h2 className='text-texto-title text-2xl font-semibold my-5 capitalize'>características de las Tazas Personalizadas</h2>
        <ol className='list-disc w-full text-texto-title text-xl ml-5'>
          <li><h2 className='font-bold'>Diseño personalizado:</h2> Una opción única para expresar tu estilo y personalidad.</li>
          <li><h2 className='font-bold'>Material duradero:</h2> Fabricadas con materiales de calidad para una mayor resistencia.</li>
          <li><h2 className='font-bold'>Regalo personalizado:</h2> Una opción especial y significativa para sorprender a alguien.</li>
          <li><h2 className='font-bold'>Material duradero:</h2> Fabricadas con materiales de calidad para una mayor resistencia.</li>
          <li><h2 className='font-bold'>Aptas para bebidas calientes y frías:</h2> Mantienen la temperatura de tus bebidas durante más tiempo.</li>
        </ol>
        <h3 className='text-texto-title text-xl capitalize font-semibold my-5'>entonces porque deberias comprar una taza personalizada?</h3>
        <p className='text-texto-title text-xl'>En conclusión, las tazas personalizadas son mucho más que simples recipientes. Son una expresión de tu estilo y personalidad, un regalo que muestra aprecio y amor, y una herramienta de marketing efectiva. No pierdas la oportunidad de agregar un toque de originalidad y distinción a tu rutina matutina. Elige una taza personalizada que te haga sonreír cada vez que la uses y disfruta de tu bebida favorita con un toque único.</p>
      </div>
    </LayoutTazasSublimadas>
  )
}

export default plantillas