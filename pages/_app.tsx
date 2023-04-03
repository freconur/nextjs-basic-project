import { AppProps } from 'next/app'
// import 'semantic-ui-css/semantic.min.css'
import '../styles/global.css'

import Layout from '@components/Layout/Layout'

// import CartProvider from '@store/Cart'

function MyApp ({ Component, pageProps }: AppProps){
  // Aditional props
  // Aditional layout
  // Manejar errores - componentDidCatch
  return (
    <Layout>
        <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp