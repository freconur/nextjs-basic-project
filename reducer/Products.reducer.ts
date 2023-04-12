type Product =
  | { type: "getProductKawaii"; payload: Kawaii[] }
  | { type: "getCategoriesBts"; payload: BtsCategories[] }
  | { type: "getTazasBts"; payload: Products[] }
  | { type: "getPosterBts"; payload: Products[] }
  | { type: "getLibretasBts"; payload: Products[] }
  | { type: "getCojinesBts"; payload: Products[] }
  | { type: "getCartucherasBts"; payload: Products[] }
  | { type: "getCojinesMidBts"; payload: Products[] }
  | { type: "getMediasBts"; payload: Products[] }
  | { type: "getPolosBts"; payload: Products[] }

export const productInitialState = {
  product: [] as Kawaii[],
  btsCategories: [] as BtsCategories[],
  tazasBts: [] as Products[],
  posterBts: [] as Products[],
  libretasBts: [] as Products[],
  cartucherasBts: [] as Products[],
  polosBts: [] as Products[],
  mediasBts: [] as Products[],
  cojinesMidBts: [] as Products[],
  cojinesBts: [] as Products[],
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
    case "getLibretasBts":
      return {
        ...state,
        libretasBts: action.payload,
      };
    case "getCojinesBts":
      return {
        ...state,
        cojinesBts: action.payload,
      };
    case "getCartucherasBts":
      return {
        ...state,
        cartucherasBts: action.payload,
      };
    case "getCojinesMidBts":
      return {
        ...state,
        cojinesMidBts: action.payload,
      };
    case "getMediasBts":
      return {
        ...state,
        mediasBts: action.payload,
      };
    case "getPolosBts":
      return {
        ...state,
        polosBts: action.payload,
      };
  }
};
