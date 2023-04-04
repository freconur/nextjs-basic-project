import { GetStaticPaths, GetStaticProps } from 'next'
import { getKawaiiProducts, kawaiiProductById } from 'reducer/kawaii'

export const getStaticPaths: GetStaticPaths = async () => {
    const product: Kawaii[] = await getKawaiiProducts()
    const paths = product.map(({ id }) => ({ params: { id } }))
    // const paths = JSON.parse(JSON.stringify(rta))
    return {
        // Statically generate all paths
        paths,
        // Display 404 for everything else
        fallback: false,
    }
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
    const id = params?.id as string
    const product = await kawaiiProductById(id)
    // const product = JSON.stringify(rta)
    return { props: { product } }
}

const ProductDetails = ({product}:{product:Kawaii}) => {
    console.log('product', product)
    return (
        <div>
            holis
            <p>{product?.name}</p>
            <p>{product?.marca}</p>
        </div>
    )
}

export default ProductDetails