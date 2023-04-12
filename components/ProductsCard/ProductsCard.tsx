import React from 'react'


type Props = {
	posterBts: Products[]
}
const ProductsCard = ({ posterBts }: Props) => {
	return (
		<ul className='m-3 grid grid-cols-1 gap-4'>
			{posterBts?.map(item => {
				return (
					<li className='flex rounded-xl bg-blanco-cool shadow-md overflow-hidden gap-2'>
						<div className='max-w-[150px] min-w-[100px]'>
							<img className='w-full' src={item.image} alt={item.name} />
						</div>
						<div className='w-[200px]'>
							{item.name}
						</div>
					</li>
				)
			})}
		</ul>
	)
}

export default ProductsCard