import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/legacy/image'
import React from 'react'
import { getBiomboProductById, getCilindrosBiombosThemes } from 'reducer/Biombos'

export const getStaticPaths: GetStaticPaths = async () => {
	const product: Biombos[] = await getCilindrosBiombosThemes()
	const paths = product.map(({ id }) => ({ params: { id } }))
	return {
			paths,
			fallback: false,
	}
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
	const id = params?.id as string
	const product = await getBiomboProductById(id)
	return { props: { product } }
}
const DetailsBiombos = ({product}: {product:Biombos}) => {
	console.log('product', product)
	return (
		<div>
			<div>
				{/* <Image  /> */}
				<h2>{product.name}</h2>
				<div>
					{product.theme}
				</div>
				<ul>
					{product.products?.map(item => {
						return (
							<li>{item}</li>
						)
					})}
				</ul>
			</div>
		</div>
	)
}

export default DetailsBiombos