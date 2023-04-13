import BtsCategories from "@components/BtsCategories/BtsCategories"
import LayoutMarginCenter from "@components/Layout/LayoutMarginCenter"
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
        <img className="w-full" src="https://firebasestorage.googleapis.com/v0/b/apiwaliky.appspot.com/o/bts%2Fheader-bts%2Fheader-bts-page-mobile.jpg?alt=media&token=47a8e6a4-3ddf-469c-ba29-181b6d770099" alt="bts" />
      </div>
      <h3 className="text-gray-500 text-center font-medium tracking-wider text-3xl capitalize my-10 mx-5">Porque Sabemos Que Eres Fan De BTS Hemos Decidido Abrir Una Tienda Especial Para Todos Los Army</h3>
      <div className="">
        <BtsCategories btsCategories={btsCategories} />
      </div>
    </div>
  )
}
export default Bts