import LayoutBts from '@components/Layout/LayoutBts'
import ProductsCard from '@components/ProductsCard/ProductsCard'
import React, { useEffect, useReducer } from 'react'
import { getLibretasBts, getTazasBts } from 'reducer/Bts'
import { ProductsReducer, productInitialState } from 'reducer/Products.reducer'

const LibretasBts = () => {
const [state, dispatch] = useReducer(ProductsReducer,productInitialState)
const { libretasBts } = state
console.log(libretasBts)
  useEffect(() => {
    getLibretasBts(dispatch)
  },[])
  return (
    <LayoutBts>
      <div className='text-2xl text-gray-500'>
        {
          libretasBts &&
        <ProductsCard productsBts={libretasBts} />
        }
      </div>
    </LayoutBts>
  )
}

export default LibretasBts