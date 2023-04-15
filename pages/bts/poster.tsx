import LayoutBts from '@components/Layout/LayoutBts'
import ProductsCard from '@components/ProductsCard/ProductsCard'
import { GetServerSideProps, GetStaticProps } from 'next'
import React, { useEffect, useReducer, useRef, useState } from 'react'
import { getPosterBts } from 'reducer/Bts'
import { ProductsReducer, productInitialState } from 'reducer/Products.reducer'


export const getStaticProps: GetStaticProps = async () => {
  const product:Products[] = await getPosterBts()
  return {
      props: { product }
  }
}
const PosterBts = ({product}: {product:Products[]}) => {
  return (
    <LayoutBts>
      <div className=' text-gray-500'>
        <h1 className='text-2xl font-semibold text-verde uppercase my-5 ml-3 text-left'>poster</h1>
        {
          product &&
        <ProductsCard products={product} />
        }
      </div>
    </LayoutBts>
  )
}

export default PosterBts