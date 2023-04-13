import React from 'react'


type Props = {
	products: Products[]
}
const ProductsCard = ({ products }: Props) => {
	return (
		<ul className='m-3 grid grid-cols-1 gap-4 xm:grid-cols-2 md:ml-0 lg:grid-cols-3 xl:grid-cols-4'>
			{products?.map(item => {
				return (
					<li key={item.id} className='grid grid-cols-gridCardProduct xm:block rounded-xl  bg-blanco-cool shadow-md overflow-hidden'>
						<img className='w-full' src={item.image} alt={item.name} />
						<div className='grid p-2 ml-2'>
							<h4 className='text-texto-title text-md font-semibold uppercase'>
								{item.marca}
							</h4>
							<h3 className='text-md font-medium capitalize'>
								{item.name}
							</h3>
							<div className='flex justify-between'>
								<p className='text-md'>S/{item.price}</p>
								<div className='w-10 h-6 text-center leading-[20px] bg-fuxia rounded-md text-blanco-cool font-medium text-lg shadow-sm'><span>ver</span></div>
							</div>
						</div>
					</li>
				)
			})}
		</ul>
	)
}

export default ProductsCard