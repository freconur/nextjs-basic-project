import LayoutBts from '@components/Layout/LayoutBts'
import ProductsCard from '@components/ProductsCard/ProductsCard'
import React, { useEffect, useReducer } from 'react'
import { getPosterBts } from 'reducer/Bts'
import { ProductsReducer, productInitialState } from 'reducer/Products.reducer'

const PosterBts = () => {
const [state, dispatch] = useReducer(ProductsReducer,productInitialState)
const { posterBts } = state
console.log('posterBts', posterBts)
  useEffect(() => {
    getPosterBts(dispatch)
  },[])
  return (
    <LayoutBts>
      <div className='text-2xl text-gray-500'>
      {/* <ul>
        {posterBts?.map(item => {
            return (
                <li key={item.id}>
                    {item.name}
                </li>
            )
        })}
    </ul> */}
        {
          posterBts &&
        <ProductsCard posterBts={posterBts} />
        }
      </div>
    </LayoutBts>
  )
}

export default PosterBts