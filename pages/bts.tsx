import BtsCategories from "@components/BtsCategories/BtsCategories"
import LayoutMarginCenter from "@components/Layout/LayoutMarginCenter"
import { IMAGES_BTS } from "ImagesLink/imagesLink"
import Image from "next/image"
import { useEffect, useReducer } from "react"
import { getBtsCategories } from "reducer/Bts"
import { ProductsReducer, productInitialState } from "reducer/Products.reducer"
import BtsHeaderWeb from '../assets/bts-headers/bts-header-web.jpg'
import BtsHeaderMobil from '../assets/bts-headers/bts-header-mobil.jpg'

const Bts = () => {
  const [state, dispatch] = useReducer(ProductsReducer, productInitialState)
  const { btsCategories } = state
  useEffect(() => {
    getBtsCategories(dispatch)
  }, [])
  console.log('btsCategories', btsCategories)
  return (
    <div>
      <div className="w-full">
        <Image className="w-full sm:hidden" src={BtsHeaderMobil} alt="bts" width={2140} priority placeholder="blur" />
        <Image className="w-full hidden sm:block" src={BtsHeaderWeb} alt="bts" priority placeholder="blur" />
      </div>
      <LayoutMarginCenter>
        <h3 className="text-gray-500 text-center font-medium tracking-wide text-3xl capitalize my-10 mx-5">Porque Sabemos Que Eres Fan De BTS Hemos Decidido Abrir Una Tienda Especial Para Todos Los Army</h3>
      </LayoutMarginCenter>
      <div className="">
        <BtsCategories btsCategories={btsCategories} />
      </div>
    </div>
  )
}
export default Bts