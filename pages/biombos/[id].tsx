import LayoutMarginCenter from '@components/Layout/LayoutMarginCenter'
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
const DetailsBiombos = ({ product }: { product: Biombos }) => {
  console.log('product', product)
  return (
    <LayoutMarginCenter>
      <div className='grid grid-cols-1 p-5 sm:p-7 sg:p-10 gap-10 sg:grid-cols-2'>
        <div className='overflow-hidden rounded-lg'>
          <Image src={`${product.image}`} alt={`${product.name}`} width={150} height={150} layout='responsive' />
        </div>

        <div>
          <h3 className='text-texto text-xl uppercase font-semibold mb-5'>{product.marca}</h3>
          <h2 className='text-texto text-3xl font-semibold capitalize mb-5'>{product.name}</h2>
          <p className='text-texto-title text-xl mb-5'>{product.description}</p>
          <div className='block mb-5'>
            <span className='text-texto-title font-semibold text-xl capitalize'>incluye:</span>
            <ol className='list-disc pl-10'>
              {product.products?.map(item => {
                return (
                  <li className='text-texto-title'>{item}</li>
                )
              })}
            </ol>
          </div>
          <div className='flex justify-between'>
            <span className='text-texto-title font-semibold text-xl capitalize'>precio:</span>
            <span className='text-texto-title text-xl font-semibold'>S/{product.price}</span>
          </div>
        </div>
      </div>
    </LayoutMarginCenter>
  )
}

export default DetailsBiombos