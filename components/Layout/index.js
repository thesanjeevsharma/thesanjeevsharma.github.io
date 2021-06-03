import Head from 'next/head'

import { Navbar, Footer } from '../'

const Layout = ({ children }) => {
   return (
      <React.Fragment>
         <Navbar />
         <main className="p-4 lg:px-16 pt-16 bg-matte">{children}</main>
         <Footer />
      </React.Fragment>
   )
}

export default Layout
