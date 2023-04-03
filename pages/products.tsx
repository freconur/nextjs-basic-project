import React, { useEffect, useReducer } from 'react'
import { getKawaiiProducts } from '../reducer/kawaii'
import { ProductsReucer, productInitialState } from '../reducer/Products.reducer'

const Products = () => {
  const [state, dispatch] = useReducer(ProductsReucer, productInitialState)
  const { product } = state
  useEffect(() => {
    getKawaiiProducts(dispatch)
  }, [])
  console.log('product', product)
  return (
    <div>
      <h1 className='text-cyan-600 text-2xl uppercase font-bold text-center'>productos kawaii</h1>
      <div className='mx-10'>
        <ul className='overflow-hidden grid grid-cols-1 xm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {product?.map((item, index) => {
            return (
              <li className='border-4 border-blue-300 rounded-lg bg-blue-200 overflow-hidden' key={index}>
                <img src={item.image} alt={item.name} />
                <div className='px-2'>
                  <h2>{item.name}</h2>
                  <p>{item.marca}</p>
                  <p>S/ {item.price}</p>
                </div>
              </li>
            )
          })}
        </ul>

      </div>
    </div>
  )
}

export default Products