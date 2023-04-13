import LayoutBts from '@components/Layout/LayoutBts'
import ProductsCard from '@components/ProductsCard/ProductsCard'
import React, { useEffect, useReducer } from 'react'
import { getCartucherasBts, getLibretasBts, getTazasBts } from 'reducer/Bts'
import { ProductsReducer, productInitialState } from 'reducer/Products.reducer'

const CartucherasBts = () => {
  const [state, dispatch] = useReducer(ProductsReducer, productInitialState)
  const { cartucherasBts } = state
  useEffect(() => {
    getCartucherasBts(dispatch)
  }, [])
  console.log('cartucherasBts', cartucherasBts)
  return (
    <LayoutBts>
      <div className='text-gray-500'>
        <h1 className='text-2xl font-semibold text-verde uppercase my-5 ml-3 text-left'>cartucheras</h1>
        {
          cartucherasBts &&
          <ProductsCard productsBts={cartucherasBts} />
        }
      </div>
    </LayoutBts>
  )
}

export default CartucherasBts