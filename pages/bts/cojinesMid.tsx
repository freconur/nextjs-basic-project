import LayoutBts from '@components/Layout/LayoutBts'
import ProductsCard from '@components/ProductsCard/ProductsCard'
import React, { useEffect, useReducer } from 'react'
import { getCojinesBts, getCojinesMidBts } from 'reducer/Bts'
import { ProductsReducer, productInitialState } from 'reducer/Products.reducer'

const CojinesMidBts = () => {
const [state, dispatch] = useReducer(ProductsReducer,productInitialState)
const { cojinesMidBts } = state
  useEffect(() => {
    getCojinesMidBts(dispatch)
  },[])
  return (
    <LayoutBts>
      <div className='text-gray-500'>
        <h1 className='text-2xl font-semibold text-verde uppercase my-5 ml-3 text-left'>cojines mid</h1>
        {
          cojinesMidBts &&
        <ProductsCard productsBts={cojinesMidBts} />
        }
      </div>
    </LayoutBts>
  )
}

export default CojinesMidBts