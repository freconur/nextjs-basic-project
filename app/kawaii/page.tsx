import LayoutKawaii from '@components/Layout/LayoutKawaii'
import React from 'react'
import ProductsCard from './ProductsCard/ProductsCard';


async function getData() {
  // const product: Products[] = await getKawaiiProducts()
  const res = await fetch("http://localhost:3000/api/products", {cache:"force-cache"});
  // const 
  return res.json()
}
const Kawaiis = async () => {
  console.log()
  const data: Products[] = await getData()
  return (
    <LayoutKawaii>
      <div className='text-gray-500'>
        <ProductsCard products={data} />
      </div>
    </LayoutKawaii>
  )
}

export default Kawaiis