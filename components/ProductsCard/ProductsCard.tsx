import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


type Props = {
	products: Products[],
	currentPage?: string,
	items?: number
}
const ProductsCard = ({ products, currentPage, items }: Props) => {
	// const showProduct = items && products?.splice(1, items)
	return (
		<ul className='m-3 grid grid-cols-1 gap-4 xm:grid-cols-2 md:ml-0 lg:grid-cols-3'>
			{items ?
				products?.slice(0, items).map((item) => {
					return (
						<li key={item.id} className='  '>
							<Link className='grid grid-cols-gridCardProduct xm:block rounded-xl bg-blanco-cool shadow-md overflow-hidden' href={`${currentPage ? `${currentPage}/${item.id}` : `${item.id}`}`}>
								<Image className='w-full' src={`${item.image}`} width={300} height={300} alt={`${item.name}`} />
								{/* <img className='w-full' src={item.image} alt={item.name} /> */}
								<div className='grid p-2 ml-2'>
									<h4 className='text-texto-title text-md font-semibold uppercase'>
										{item.marca}
									</h4>
									<h3 className='text-md font-medium capitalize text-texto-title'>
										{item.name}
									</h3>
									{item.price &&
										<div className='flex justify-between'>
											<p className='text-md'>S/{item.price}</p>
											<div className='w-10 h-6 text-center leading-[20px] bg-fuxia rounded-md text-blanco-cool font-medium text-lg shadow-sm'><span>ver</span></div>
										</div>
									}
									{/* <Link  className="p-2 bg-green-400">details</Link> */}
								</div>
							</Link>
						</li>
					)
				})
				:
				products.map((item) => {
					return (
						<li key={item.id} className='  '>
							<Link className='grid grid-cols-gridCardProduct xm:block rounded-xl bg-blanco-cool shadow-md overflow-hidden' href={`${currentPage ? `${currentPage}/${item.id}` : `${item.id}`}`}>
								<Image className='w-full' src={`${item.image}`} width={300} height={300} alt={`${item.name}`} />
								{/* <img className='w-full' src={item.image} alt={item.name} /> */}
								<div className='grid p-2 ml-2'>
									<h4 className='text-texto-title text-md font-semibold uppercase'>
										{item.marca}
									</h4>
									<h3 className='text-md font-medium capitalize text-texto-title'>
										{item.name}
									</h3>
									{item.price &&
										<div className='flex justify-between'>
											<p className='text-md'>S/{item.price}</p>
											<div className='w-10 h-6 text-center leading-[20px] bg-fuxia rounded-md text-blanco-cool font-medium text-lg shadow-sm'><span>ver</span></div>
										</div>
									}
								</div>
							</Link>
						</li>
					)
				})
			}
		</ul>
	)
}

export default ProductsCard