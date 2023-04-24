import { NextApiHandler } from "next"
import Image from "next/image"

type Params = {
  params: {
    id: string
  }
}

const detail = async (id: string) => {
  const productDetail = await fetch(`http://localhost:3000/api/products/${id}`,
  {
    cache:"force-cache"
  }
  )
  // if (!getProduct.ok) throw new Error('failed to fetch id')
  // console.log('getProductaa', getProduct.json())
  return productDetail.json()
}
const KawaiiDetail = async ({ params: { id } }: Params) => {
  // const KawaiiDetail = async ({ params }:any) => {
  // const id = params
  // const id = params?.id as string
  const data = await detail(id)
  return (
    <div>
      este es el {id}
      <Image src={data.image} width="300" height="300" alt={data.name} />
      <p>nombre:{data.name}</p>
    </div>
  )
}

export default KawaiiDetail