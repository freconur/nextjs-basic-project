import Products from 'components/Products/Products'
import React, { useEffect, useReducer } from 'react'
import { getKawaiiProducts, kawaiiProductById } from 'reducer/kawaii'
import { GetStaticProps } from 'next'
import SectionBts from '@components/SectionBts/SectionBts'
import SectionKawaii from '@components/SectionKawaii/SectionKawaii'
// import SectionContact from '@components/SectionContact/SectionContact'
import Slide from '@components/Slider/Slide'
import LayoutMarginCenter from '@components/Layout/LayoutMarginCenter'
import dynamic from 'next/dynamic'
import Slider from '@components/Slider/Slider'


// export const getStaticProps: GetStaticProps = async () => {
//   const product: Kawaii[] = await getKawaiiProducts()
//   // const rta = product
//   return {
//     props: { product }
//   }
// }

const Home = () => {
  const DynamicContact = dynamic(() => import('@components/SectionContact/SectionContact'), {
    loading: () => <p>Loading...</p>,
  })
  return (
    <div>
      {/* <div className=''> */}
      <Slider autoplay={true}/>
        {/* <Slide /> */}
          <SectionBts />
          <SectionKawaii />
          <DynamicContact />
        {/* <Products products={product} /> */}
      </div>
    // </div>
  )
}

export default Home