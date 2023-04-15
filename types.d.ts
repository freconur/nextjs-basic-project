interface Kawaii {
  category?: string;
  id?: string;
  image?: string;
  marca?: string;
  name?: string;
  price?: string;
  state?: boolean;
  stock?: string;
  subcategory?: string;
}
declare module "*.png" {
  const value: any;
  export = value;
}

interface BtsCategories {
  id?: string;
  name?: string;
  category?: string;
  image?: string;
}

interface Products {
  id?: string
  category?: string
  image?: string
  marca?: string
  name?: string
  price?: string
  state?: boolean
  stock?: number
}
interface Biombos {
  id?: string
  image?: string
  marca?: string
  name?: string
  products?: string[]
  price?: string
  theme?: string
  description?: string
}