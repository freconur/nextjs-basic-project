import LayoutBts from '@components/Layout/LayoutBts'
import ProductsCard from '@components/ProductsCard/ProductsCard'
import { GetServerSideProps, GetStaticProps } from 'next'
import React, { useEffect, useReducer } from 'react'
import { getCojinesBts } from 'reducer/Bts'
import { ProductsReducer, productInitialState } from 'reducer/Products.reducer'

export const getStaticProps: GetStaticProps = async () => {
  const product:Products[] = await getCojinesBts()
  return {
      props: { product },

  }
}
const CojinesBts = ({product}: {product:Products[]}) => {
  return (
    <LayoutBts>
      <div className='text-gray-500'>
        {
          product &&
        <ProductsCard products={product} currentPage={"cojines"} />
        }
      </div>
    </LayoutBts>
  )
}

export default CojinesBts