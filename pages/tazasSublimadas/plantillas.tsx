import LayoutTazasSublimadas from '@components/Layout/LayoutTazasSublimadas'
import ProductsCard from '@components/ProductsCard/ProductsCard'
import { GetStaticProps } from 'next'
import React from 'react'
import { getTazasPersonzalidas } from 'reducer/TazasPersonalizadas'


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
        <h1 className='text-verde text-2xl capitalize font-semibold text-center mb-5 md: text-4xl'>Tazas sublimadas personalizadas Juliaca</h1>
        <p className='text-texto-title text-xl text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia voluptate nisi ullam iste quidem tempora libero reiciendis minima, cum asperiores iusto, est rerum ducimus voluptas cupiditate quis in alias suscipit.</p>
      </div>
      <div>
        <ProductsCard products={products} currentPage={"plantillas"} />
      </div>
    </LayoutTazasSublimadas>
  )
}

export default plantillas