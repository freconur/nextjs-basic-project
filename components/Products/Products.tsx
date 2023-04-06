import React, { useEffect, useReducer } from 'react'
import Link from 'next/link'
import Card from 'components/Card/Card'


type ProductsListProps = {
  products: Kawaii[]
}
// const mapProductsToCards = (products: Kawaii[]) => {
//   products.map(({ name, id, marca, price, image }) => {
//     <Link key={id} href={`/product/${id}`}>
//       <Card name={name} id={id} marca={marca} price={price} image={image} />
//     </Link>
//   })
// }
const Products = ({ products }: ProductsListProps) => {
  
  return (
    <>
    <ul className='overflow-hidden grid grid-cols-1 xm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {products.map(({ name, id, marca, price, image }) => {
        return (
          <Link key={id} href={`/products/${id}`}>
            <Card name={name} id={id} marca={marca} price={price} image={image} />
          </Link>
        )
      })}
    </ul>
    </>
  )
}

export default Products