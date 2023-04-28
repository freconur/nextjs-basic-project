import SectionBts from '@components/SectionBts/SectionBts'
import SectionKawaii from '@components/SectionKawaii/SectionKawaii'
import dynamic from 'next/dynamic'
import Slider from '@components/Slider/Slider'
import Head from 'next/head'


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
      <Head>
        <title>Waliky store</title>
        <meta name="description" content="custom cup description"/>
      </Head>
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