import LayoutBts from '@components/Layout/LayoutBts'
import ProductsCard from '@components/ProductsCard/ProductsCard'
import { GetServerSideProps, GetStaticProps } from 'next'
import React, { useEffect, useReducer } from 'react'
import { getCojinesBts, getCojinesMidBts } from 'reducer/Bts'
import { ProductsReducer, productInitialState } from 'reducer/Products.reducer'

export const getStaticProps: GetStaticProps = async () => {
  const product:Products[] = await getCojinesMidBts()
  return {
      props: { product }
  }
}
const CojinesMidBts = ({product}: {product:Products[]}) => {
  return (
    <LayoutBts>
      <div className='text-gray-500'>
        <h1 className='text-2xl font-semibold text-verde uppercase my-5 ml-3 text-left'>cojines mid</h1>
        {
          product &&
        <ProductsCard products={product} currentPage={"cojinesMid"}/>
        }
      </div>
    </LayoutBts>
  )
}

export default CojinesMidBts