import Head from 'next/head'
import '../global.css'

export default function MyApp({ Component, pageProps }) {
   return (
      <>
         <Head>
            <title>Sanjeev Sharma | JavaScript Developer</title>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" href="/favicon.ico" />
            <meta property="og:title" content="Sanjeev Sharma" />
            <meta property="og:description" content="A JavaScript developer based in India" />
            <meta property="tw:title" content="Sanjeev Sharma" />
            <meta property="tw:description" content="A JavaScript developer based in India" />
         </Head>
         <Component {...pageProps} />
      </>
   )
}
