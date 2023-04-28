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
      <div className='p-5 my-5'>
        <h1 className='text-verde capitalize font-semibold text-center mb-5 md: text-4xl'>Tazas Personalizadas: El detalle que te conecta con tus momentos más especiales</h1>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
        <Image className='' src={Tazas} width={500} height={300} layout='responsive' alt="tazas-personalizas-regala-especial"/>
        <p className='text-texto-title text-xl text-left'>Las tazas son un objeto cotidiano que nos acompaña en nuestra rutina diaria. Ya sea para disfrutar de una taza de café en la mañana, compartir una infusión con amigos o simplemente disfrutar de una bebida caliente durante una tarde lluviosa. Sin embargo, ¿alguna vez te has detenido a pensar en la magia que puede haber detrás de una taza personalizada?, te contamos todo lo que necesitas saber sobre las tazas personalizadas y por qué pueden ser el detalle que te conecta con tus momentos más especiales.</p>
        </div>
      </div>
      <div>
        <h3 className='p-5 text-texto-title text-xl font-semibold'>Aqui te mostramos algunos de nuestros trabajos en tazas personalizadas:</h3>
        <ProductsCard products={products} currentPage={"plantillas"} items={3}/>
      </div>
    </LayoutTazasSublimadas>
  )
}

export default plantillas