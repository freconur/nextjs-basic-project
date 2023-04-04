import Products from '@components/Products/Products'
import React, { useEffect, useReducer } from 'react'
import { ProductsReucer, productInitialState } from 'reducer/Products.reducer'
import { getKawaiiProducts, kawaiiProductById } from 'reducer/kawaii'
import { GetStaticProps } from 'next'


export const getStaticProps: GetStaticProps = async () => {
  const product:Kawaii[] = await getKawaiiProducts()
  // const rta = product
  return { props: { product } 
}}
const Home = ({product}:{product:Kawaii[]}) => {
  console.log(product)
console.log('json',JSON.parse(JSON.stringify(product)))

  return (
    <div>
      <h1 className='text-cyan-600 text-2xl uppercase font-bold text-center'>productos kawaii</h1>
      <div className='mx-10'>
        <Products products={product} />
      </div>
    </div>
  )
}

export default Home