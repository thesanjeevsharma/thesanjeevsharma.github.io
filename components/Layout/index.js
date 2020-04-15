import Head from 'next/head'

import { Navbar, Footer } from '../'

const Layout = ({ children }) => {
   return (
      <React.Fragment>
         <Head>
            <title>Sanjeev Sharma</title>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" href="/favicon.ico" />
            <meta
               name="description"
               content="Full stack developer based in Bengaluru, Karnataka(IN)"
            />
            <meta name="robots" content="index, follow" />
         </Head>
         <Navbar />
         <main className="p-4 lg:px-16 pt-16 bg-matte">{children}</main>
         <Footer />
      </React.Fragment>
   )
}

export default Layout
