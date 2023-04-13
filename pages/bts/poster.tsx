import LayoutBts from '@components/Layout/LayoutBts'
import ProductsCard from '@components/ProductsCard/ProductsCard'
import React, { useEffect, useReducer, useRef, useState } from 'react'
import { getPosterBts } from 'reducer/Bts'
import { ProductsReducer, productInitialState } from 'reducer/Products.reducer'

const PosterBts = () => {
const [state, dispatch] = useReducer(ProductsReducer,productInitialState)
const { posterBts } = state
  useEffect(() => {
    getPosterBts(dispatch)
  },[])
  return (
    <LayoutBts>
      <div className=' text-gray-500'>
        <h1 className='text-2xl font-semibold text-verde uppercase my-5 ml-3 text-left'>poster</h1>
        {
          posterBts &&
        <ProductsCard productsBts={posterBts} />
        }
      </div>
    </LayoutBts>
  )
}

export default PosterBts