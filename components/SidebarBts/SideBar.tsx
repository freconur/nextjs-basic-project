import Link from 'next/link'
import React, { useEffect, useReducer, useState } from 'react'
import { getBtsCategories } from 'reducer/Bts'
import { ProductsReducer, productInitialState } from 'reducer/Products.reducer'
import { RiArrowDownSLine } from "react-icons/ri";
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
      <div className='sticky md:hidden w-full top-0 right-0 z-20'>
        <div onClick={() => setShowCategories(!showCategories)} className='relative cursor-pointer justify-center flex items-center  text-center w-full bg-blanco-cool h-[60px] drop-shadow-md'>
          <p className={`relative z-20 justify-center items-center flex text-xl leading-[3.25rem] w-full h-full bg-blanco-cool  capitalize font-bold ${showCategories ? "bg-violet-200 duration-300 transition text-blanco-cool" : "text-texto"}`}>
            categorias
            <RiArrowDownSLine className={` mt-1 duration-300 transition ${showCategories && "-rotate-90 duration-300 transition"}`}/>
          </p>

          <ul className={`overflow-hidden fixed z-10 -translate-y-[200%] duration-500 transition rounded-b-xl bg-blanco-cool shadow-xl first-letter w-full ${showCategories && "translate-y-[235px] duration-500 transition "}`}>
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

        </div>
      </div>
    </>
  )
}

export default SideBar