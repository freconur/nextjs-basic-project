import Link from 'next/link'
import React, { useEffect, useReducer, useState } from 'react'
import { getBtsCategories } from 'reducer/Bts'
import { ProductsReducer, productInitialState } from 'reducer/Products.reducer'

const SideBar = () => {

  const [state, dispatch] = useReducer(ProductsReducer, productInitialState)
  const { btsCategories } = state
  const [showCategories, setShowCategories] = useState<Boolean>(false)
  useEffect(() => {
    getBtsCategories(dispatch)
  }, [])
  console.log('btsCategories', btsCategories)
  return (
    <>
    <div onClick={() => setShowCategories(!showCategories)} className='sticky top-0 right-0 z-20 cursor-pointer justify-center flex items-center  text-center w-full bg-blanco-cool h-[60px] drop-shadow-md'>
      <p className='text-xl text-texto capitalize font-bold'>
        categorias
      </p>
    </div>
      <ul className={`overflow-hidden fixed z-10 -translate-y-[200%] duration-500 transition rounded-b-xl bg-blanco-cool shadow-xl first-letter w-full ${showCategories && "translate-y-[0px] duration-500 transition"}`}>
        {
          btsCategories.map((category) => {
            return (
              <li key={category.id} className='hover:bg-cian transition duration-300 ease-in  hover:text-blanco-cool text-center text-xl text-texto cursor-pointer capitalize font-bold'>
                <Link href={`${category.name}`} className='w-full h-full block p-3' >
                {category.name}
                </Link>
              </li>
            )
          })
        }
      </ul>
    </>
  )
}

export default SideBar