import LayoutBts from '@components/Layout/LayoutBts'
import ProductsCard from '@components/ProductsCard/ProductsCard'
import React, { useEffect, useReducer } from 'react'
import { getCojinesBts, getCojinesMidBts, getMediasBts } from 'reducer/Bts'
import { ProductsReducer, productInitialState } from 'reducer/Products.reducer'

const MediasBts = () => {
const [state, dispatch] = useReducer(ProductsReducer,productInitialState)
const { mediasBts } = state
  useEffect(() => {
    getMediasBts(dispatch)
  },[])
  return (
    <LayoutBts>
      <div className='text-2xl text-gray-500'>
        {
          mediasBts &&
        <ProductsCard productsBts={mediasBts} />
        }
      </div>
    </LayoutBts>
  )
}

export default MediasBts