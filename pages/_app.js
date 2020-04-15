import Head from 'next/head'

import '../global.css'

export default function MyApp({ Component, pageProps, children }) {
   return (
      <Component {...pageProps}>
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
         {children}
      </Component>
   )
}
