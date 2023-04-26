import LayoutMarginCenter from "@components/Layout/LayoutMarginCenter"
import { GetStaticPaths, GetStaticProps } from "next"
import Image from "next/image"
import Link from "next/link"
import { getTazaPersonzalidaById, getTazasPersonzalidas } from "reducer/TazasPersonalizadas"

export const getStaticPaths: GetStaticPaths = async () => {
    const product: Products[] = await getTazasPersonzalidas()
    const paths = product.map(({ id }) => ({ params: { id } }))
    return {
        paths,
        fallback: false,
    }
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
    const id = params?.id as string
    const product = await getTazaPersonzalidaById(id)
    return {
        props: { product }
    }
}
const DetailsTazasPersonalizadas = ({ product }: { product: Products }) => {
    return (
        <LayoutMarginCenter>
            <div className='grid grid-cols-1 p-10 gap-10 sm:grid-cols-2'>
                {/* <div className='overflow-hidden rounded-lg'> */}
                <Image className="rounded-lg" src={`${product.image}`} alt={`${product.name}`} width={150} height={150} layout="responsive" />
                {/* </div> */}

                <div>
                    <h3 className='text-texto text-xl uppercase font-semibold mb-5'>{product.marca}</h3>
                    <h2 className='text-texto text-3xl font-semibold capitalize mb-5'>{product.name}</h2>
                    <p className='text-texto-title text-xl mb-5'>{product.description}</p>
                    {/* <div className='block mb-5'>
                        <span className='text-texto-title font-semibold text-xl capitalize'>incluye:</span>
                        <ol className='list-disc pl-10'>
                            {product.products?.map(item => {
                                return (
                                    <li className='text-texto-title'>{item}</li>
                                )
                            })}
                        </ol>
                    </div> */}
                    <div className='flex justify-between'>
                        <span className='text-texto-title font-semibold text-xl capitalize'>precio:</span>
                        <span className='text-texto-title text-xl font-semibold'>S/{product.price}</span>
                        <Link className="bg-yellow-400 p-2 rounded-sm" href="https://wa.me/p/5965356190211100/51936263748">
                            comprar
                        </Link>
                        {/* <button></button> */}
                    </div>
                </div>
            </div>
        </LayoutMarginCenter>
    )
}

export default DetailsTazasPersonalizadas