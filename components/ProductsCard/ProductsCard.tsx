import React from 'react'


type Props = {
	posterBts: Products[]
}
const ProductsCard = ({ posterBts }: Props) => {
	return (
		<ul className='m-3 grid grid-cols-1 gap-4'>
			{posterBts?.map(item => {
				return (
					<li className='grid grid-cols-gridCardProduct rounded-xl  bg-blanco-cool shadow-md overflow-hidden'>
						<img className='w-full' src={item.image} alt={item.name} />
						<div className='grid p-2 ml-2'>
							<h4 className='text-texto-title font-semibold uppercase'>
								{item.marca}
							</h4>
							<h3 className='text-2xl font-medium capitalize'>
								{item.name}
							</h3>
							<div className='flex justify-between'>
								<p>S/{item.price}</p>
								<div className='w-10 h-8 text-center leading-[28px] bg-fuxia rounded-md text-blanco-cool font-medium'><span>ver</span></div>
							</div>
						</div>
					</li>
				)
			})}
		</ul>
	)
}

export default ProductsCard