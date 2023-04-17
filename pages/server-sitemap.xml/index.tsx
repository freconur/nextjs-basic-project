import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { ISitemapField, getServerSideSitemap } from "next-sitemap";
import { getCilindrosBiombosThemes } from "reducer/Biombos";

export const getServerSideProps = async(ctx:any) =>{
    const product: Biombos[] = await getCilindrosBiombosThemes()
        console.log(product)
        const fields: ISitemapField[] = product.map(item => ({
            loc:`https://www.walikystore.online/biombos/${item.id}`,
            lastmod: new Date().toISOString()
        }))
        return getServerSideSitemap(ctx, fields)
}
export default function Site() {}