import { GetStaticPaths, GetStaticProps } from "next"
import Image from "next/image"
import { kawaiiProductById } from "reducer/kawaii"
import { getKawaiiProducts } from "reducer/kawaii"

export const getStaticPaths: GetStaticPaths = async () => {
    const product: Kawaii[] = await getKawaiiProducts()
    const paths = product.map(({ id }) => ({ params: { id } }))
    return {
        paths,
        fallback: false,
    }
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
    const id = params?.id as string
    const product = await kawaiiProductById(id)
    return {
        props: { product }
    }
}
const KawaiiDetail = ({ product }: { product: Kawaii }) => {
    // console.log('data', getStaticProps({params: id}))
    return (
        <div>
            <h1>Detalle de kawaii {product?.name} </h1>
            <Image alt={`${product.name}`} src={`${product.image}`} width={500} height={500} />
        </div>
    )
}

export default KawaiiDetail