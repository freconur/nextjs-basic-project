import LayoutKawaii from "@components/Layout/LayoutKawaii"
import ProductsCard from "@components/ProductsCard/ProductsCard"
import { GetStaticProps, GetServerSideProps } from "next"
import { getKawaiiProducts } from "reducer/kawaii"



export const getServerSideProps: GetServerSideProps = async () => {
    const product: Kawaii[] = await getKawaiiProducts()
    return {
        props: { product }
    }
}

const kawaii = ({ product }: { product: Products[] }) => {
    return (
        <LayoutKawaii>
            <div className='text-gray-500'>

                <ProductsCard products={product} currentPage={"kawaii"}/>
            </div>
        </LayoutKawaii>
    )
}

export default kawaii