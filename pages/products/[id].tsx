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

const ProductDetails = ({ product }: { product: Kawaii }) => {
    console.log('product', product)
    return (
        <div className='bg-blue-100 shadow p-5 m-10 rounded-lg flex border-2'>
            <div className='mr-3'>
                <p>{product?.name}</p>
                <p>{product?.marca}</p>
            </div>
            <div className='w-full'>
                <img className='w-full' src={product?.image} alt="" />
            </div>
        </div>
    )
}

export default ProductDetails