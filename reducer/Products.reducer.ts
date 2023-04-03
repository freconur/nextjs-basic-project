

type Product = 
| { type: "getProductKawaii"; payload: Kawaii[]}


export const productInitialState = {
  product: [] as Kawaii[]
}

export const ProductsReucer = (state: typeof productInitialState, action:Product ) =>{
  switch(action.type) {
    case "getProductKawaii":
      return{
        ...state,
        product:action.payload
      }
  }
}
