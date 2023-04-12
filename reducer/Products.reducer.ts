type Product =
  | { type: "getProductKawaii"; payload: Kawaii[] }
  | { type: "getCategoriesBts"; payload: BtsCategories[] }
  | { type: "getTazasBts"; payload: Products[] }
  | { type: "getPosterBts"; payload: Products[] };

export const productInitialState = {
  product: [] as Kawaii[],
  btsCategories: [] as BtsCategories[],
  tazasBts: [] as Products[],
  posterBts: [] as Products[],
};

export const ProductsReducer = (
  state: typeof productInitialState,
  action: Product
) => {
  switch (action.type) {
    case "getProductKawaii":
      return {
        ...state,
        product: action.payload,
      };
    case "getCategoriesBts":
      return {
        ...state,
        btsCategories: action.payload,
      };
    case "getTazasBts":
      return {
        ...state,
        tazasBts: action.payload,
      };
    case "getPosterBts":
      return {
        ...state,
        posterBts: action.payload,
      };
  }
};
