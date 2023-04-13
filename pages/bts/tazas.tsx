import LayoutBts from '@components/Layout/LayoutBts'
import ProductsCard from '@components/ProductsCard/ProductsCard'
import React, { useEffect, useReducer } from 'react'
import { getTazasBts } from 'reducer/Bts'
import { ProductsReducer, productInitialState } from 'reducer/Products.reducer'

const TazasBts = () => {
  const [state, dispatch] = useReducer(ProductsReducer, productInitialState)
  const { tazasBts } = state
  useEffect(() => {
    getTazasBts(dispatch)
  }, [])
  return (
    <LayoutBts>
      <div className='text-gray-500'>
        <h1 className='text-2xl font-semibold text-verde uppercase my-5 ml-3 text-left'>tazas</h1>
        {
          tazasBts &&
          <ProductsCard productsBts={tazasBts} />
        }
      </div>
    </LayoutBts>
  )
}

export default TazasBts