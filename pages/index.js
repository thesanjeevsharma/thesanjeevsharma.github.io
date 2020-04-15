import Particles from 'react-particles-js'

import { Layout, OtherStuff, WorkEx } from '../components'

const Home = () => {
   return (
      <Layout>
         <React.Fragment>
            <Particles
               className="absolute inset-0 z-0"
               params={{
                  particles: {
                     number: {
                        value: 100,
                        density: {
                           enable: true,
                           value_area: 1000,
                        },
                     },
                     line_linked: {
                        enable: true,
                        opacity: 0.05,
                     },
                     move: {
                        direction: 'right',
                        speed: 0.1,
                     },
                     size: {
                        value: 1.2,
                     },
                     opacity: {
                        anim: {
                           enable: true,
                           speed: 1,
                           opacity_min: 0.05,
                        },
                     },
                  },
                  interactivity: {
                     events: {
                        onclick: {
                           enable: true,
                           mode: 'push',
                        },
                     },
                     modes: {
                        push: {
                           particles_nb: 1,
                        },
                     },
                  },
                  retina_detect: true,
               }}
            />
            <section className="h-screen py-16 lg:py-32 text-white text-left flex flex-col">
               <h2 className="text-5xl font-bold mb-8">Hello,</h2>
               <h3 className="text-xl lg:text-2xl font-medium">I am</h3>
               <h1 className="text-3xl lg:text-6xl font-bold mb-8">Sanjeev Sharma</h1>
               <p className="text-base lg:text-xl mb-32">
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
