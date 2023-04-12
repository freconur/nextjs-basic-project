import React from 'react'


type Props = {
	productsBts: Products[]
}
const ProductsCard = ({ productsBts }: Props) => {
	return (
		<ul className='m-3 grid grid-cols-1 gap-4'>
			{productsBts?.map(item => {
				return (
					<li key={item.id} className='grid grid-cols-gridCardProduct rounded-xl  bg-blanco-cool shadow-md overflow-hidden'>
						<img className='w-full' src={item.image} alt={item.name} />
						<div className='grid p-2 ml-2'>
							<h4 className='text-texto-title text-lg font-semibold uppercase'>
								{item.marca}
							</h4>
							<h3 className='text-xl font-medium capitalize'>
								{item.name}
							</h3>
							<div className='flex justify-between'>
								<p className='text-lg'>S/{item.price}</p>
								<div className='w-10 h-8 text-center leading-[28px] bg-fuxia rounded-md text-blanco-cool font-medium text-lg'><span>ver</span></div>
							</div>
						</div>
					</li>
				)
			})}
		</ul>
	)
}

export default ProductsCard