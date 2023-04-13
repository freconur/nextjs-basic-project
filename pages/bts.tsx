import BtsCategories from "@components/BtsCategories/BtsCategories"
import LayoutMarginCenter from "@components/Layout/LayoutMarginCenter"
import { IMAGES_BTS } from "ImagesLink/imagesLink"
import { useEffect, useReducer } from "react"
import { getBtsCategories } from "reducer/Bts"
import { ProductsReducer, productInitialState } from "reducer/Products.reducer"


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
        <img className="w-full sm:hidden" src={IMAGES_BTS.btsPage.mobile} alt="bts" />
        <img className="w-full hidden sm:block" src={IMAGES_BTS.btsPage.web} alt="bts" />
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