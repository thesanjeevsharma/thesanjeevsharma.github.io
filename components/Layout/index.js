import Head from 'next/head'

import { Navbar, Footer } from '../'

const Layout = ({ children }) => {
   return (
      <React.Fragment>
         <Head>
            <title>Sanjeev Sharma</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <Navbar />
         <main className="p-4 pt-16 bg-matte">{children}</main>
         <Footer />
      </React.Fragment>
   )
}

export default Layout
