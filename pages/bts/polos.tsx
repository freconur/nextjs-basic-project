import LayoutBts from '@components/Layout/LayoutBts'
import ProductsCard from '@components/ProductsCard/ProductsCard'
import React, { useEffect, useReducer } from 'react'
import { getCojinesBts, getCojinesMidBts, getPolosBts } from 'reducer/Bts'
import { ProductsReducer, productInitialState } from 'reducer/Products.reducer'

const PolosBts = () => {
const [state, dispatch] = useReducer(ProductsReducer,productInitialState)
const { polosBts } = state
  useEffect(() => {
    getPolosBts(dispatch)
  },[])
  return (
    <LayoutBts>
      <div className='text-2xl text-gray-500'>
        {
          polosBts &&
        <ProductsCard productsBts={polosBts} />
        }
      </div>
    </LayoutBts>
  )
}

export default PolosBts