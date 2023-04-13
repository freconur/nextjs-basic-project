import Link from 'next/link'
import React, { useEffect, useReducer } from 'react'
import { getBtsCategories } from 'reducer/Bts'
import { ProductsReducer, productInitialState } from 'reducer/Products.reducer'

const SideBarLeft = () => {
	const [state, dispatch] = useReducer(ProductsReducer, productInitialState)
	const { btsCategories } = state

	useEffect(() => {
		getBtsCategories(dispatch)
	}, [])
	return (
		<div className='sticky top-5 w-full left-5 rounded-lg shadow-lg  pt-10 mt-5 bg-azulClaro h-[620px]'>
			<h2 className='capitalize mb-10 text-texto font-semibold text-xl text-center'>categorias bts</h2>
			<ul className='grid grid-cols-1 gap-5 p-2'>
				{
					btsCategories.map(category => {
						return (
							<li key={category.id} className='text-center duration-300 transition hover:bg-blue-300 hover:rounded-lg hover:shadow-md '>
								<Link className='p-2 duration-300 transition hover:text-blanco-cool capitalize w-full h-full block text-lg text-texto-title' href={`/bts/${category.name}`}>
									{category.name}
								</Link>
							</li>
						)
					})
				}
			</ul>
		</div>
	)
}

export default SideBarLeft