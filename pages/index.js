import { Layout, OtherStuff, WorkEx } from '../components'

const Home = () => {
   return (
      <Layout>
         <React.Fragment>
            <section className="h-screen py-16 text-white text-left flex flex-col py-16">
               <h2 className="text-5xl font-bold mb-8">Hello</h2>
               <h3 className="text-lg">I am</h3>
               <h1 className="text-3xl font-bold mb-8">Sanjeev Sharma</h1>
               <p className="text-md mb-32">
                  I am working as a <span className="text-green-400">Full stack developer</span> at
                  a startup in Bangalore, Karnataka(IN). My area of expertise is web technologies
                  but my knowledge is not limited to just that. {';)'}
               </p>
            </section>
            <WorkEx />
            <OtherStuff />
         </React.Fragment>
      </Layout>
   )
}

export default Home
