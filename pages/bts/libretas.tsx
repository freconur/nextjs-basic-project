import LayoutBts from '@components/Layout/LayoutBts'
import ProductsCard from '@components/ProductsCard/ProductsCard'
import React, { useEffect, useReducer } from 'react'
import { getLibretasBts, getTazasBts } from 'reducer/Bts'
import { ProductsReducer, productInitialState } from 'reducer/Products.reducer'

const LibretasBts = () => {
  const [state, dispatch] = useReducer(ProductsReducer, productInitialState)
  const { libretasBts } = state
  console.log(libretasBts)
  useEffect(() => {
    getLibretasBts(dispatch)
  }, [])
  return (
    <LayoutBts>
      <div className='text-gray-500'>
        <h1 className='text-2xl font-semibold text-verde uppercase my-5 ml-3 text-left'>libretas</h1>
        {
          libretasBts &&
          <ProductsCard productsBts={libretasBts} />
        }
      </div>
    </LayoutBts>
  )
}

export default LibretasBts