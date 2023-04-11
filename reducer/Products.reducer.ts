

type Product = 
| { type: "getProductKawaii"; payload: Kawaii[]}
| { type: "getCategoriesBts"; payload: BtsCategories[]}


export const productInitialState = {
  product: [] as Kawaii[],
  btsCategories: [] as BtsCategories[]
}

export const ProductsReducer = (state: typeof productInitialState, action:Product ) =>{
  switch(action.type) {
    case "getProductKawaii":
      return{
        ...state,
        product:action.payload
      }
      case "getCategoriesBts":
        return {
          ...state,
          btsCategories:action.payload
        }
        
  }
}
