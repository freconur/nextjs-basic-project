import Products from 'components/Products/Products'
import React, { useEffect, useReducer } from 'react'
import { getKawaiiProducts, kawaiiProductById } from 'reducer/kawaii'
import { GetStaticProps } from 'next'
import SectionBts from '@components/SectionBts/SectionBts'
import SectionKawaii from '@components/SectionKawaii/SectionKawaii'
import SectionContact from '@components/SectionContact/SectionContact'
import Slide from '@components/Slider/Slide'
import LayoutMarginCenter from '@components/Layout/LayoutMarginCenter'


export const getStaticProps: GetStaticProps = async () => {
  const product: Kawaii[] = await getKawaiiProducts()
  // const rta = product
  return {
    props: { product }
  }
}
const Home = ({ product }: { product: Kawaii[] }) => {
  console.log(product)
  console.log('json', JSON.parse(JSON.stringify(product)))

  return (
    <div>
      <div className=''>
        <Slide />
          <SectionBts />
          <SectionKawaii />
          <SectionContact />
        {/* <Products products={product} /> */}
      </div>
    </div>
  )
}

export default Home