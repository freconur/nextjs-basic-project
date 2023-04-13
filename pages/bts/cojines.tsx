import LayoutBts from '@components/Layout/LayoutBts'
import ProductsCard from '@components/ProductsCard/ProductsCard'
import React, { useEffect, useReducer } from 'react'
import { getCojinesBts } from 'reducer/Bts'
import { ProductsReducer, productInitialState } from 'reducer/Products.reducer'

const CojinesBts = () => {
const [state, dispatch] = useReducer(ProductsReducer,productInitialState)
const { cojinesBts } = state
console.log(cojinesBts)
  useEffect(() => {
    getCojinesBts(dispatch)
  },[])
  return (
    <LayoutBts>
      <div className='text-gray-500'>
        {
          cojinesBts &&
        <ProductsCard productsBts={cojinesBts} />
        }
      </div>
    </LayoutBts>
  )
}

export default CojinesBts