import LayoutBts from '@components/Layout/LayoutBts'
import ProductsCard from '@components/ProductsCard/ProductsCard'
import { GetServerSideProps } from 'next'
import React, { useEffect, useReducer } from 'react'
import { getCojinesBts, getCojinesMidBts, getMediasBts } from 'reducer/Bts'
import { ProductsReducer, productInitialState } from 'reducer/Products.reducer'

export const getServerSideProps: GetServerSideProps = async () => {
  const product:Products[] = await getMediasBts()
  return {
      props: { product }
  }
}
const MediasBts = ({product}: {product:Products[]}) => {
  return (
    <LayoutBts>
      <div className='text-gray-500'>
        <h1 className='text-2xl font-semibold text-verde uppercase my-5 ml-3 text-left'>medias</h1>
        {
          product &&
          <ProductsCard products={product} />
        }
      </div>
    </LayoutBts>
  )
}

export default MediasBts