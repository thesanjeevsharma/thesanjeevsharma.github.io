import { Layout } from '../components'
import { Redirect } from '../assets/icons'

const Projects = () => {
   const projects = [
      {
         name: 'polrr',
         description: 'Climate change news from all sources (still in development)',
         visit: 'http://polrr.news',
         code: 'https://github.com/thesanjeevsharma/polrr',
         tags: ['React', 'Typescript', 'redux-toolkit'],
      },
      {
         name: 'snapy',
         description: 'Snapchat clone',
         visit: '',
         code: 'https://github.com/thesanjeevsharma/snapy',
         tags: ['React', 'redux-toolkit'],
      },
      {
         name: 'valorant-game-info',
         description: 'Valorant agents app',
         visit: 'https://valorant-game-info.netlify.app/',
         code: 'https://github.com/thesanjeevsharma/valorant-game-info',
         tags: ['React', 'Typescript', 'SCSS'],
      },
      {
         name: 'travel-log',
         description: 'Writing bad code while learning about maps.',
         visit: '',
         code: 'https://github.com/thesanjeevsharma/travel-log',
         tags: ['React', 'NodeJS', 'react-map-gl'],
      },
      {
         name: 'break-timer',
         description: 'Pomodoro clock desktop app.',
         visit: '',
         code: 'https://github.com/thesanjeevsharma/break-timer',
         tags: ['HTML', 'CSS', 'VanillaJS', 'Electron'],
      },
      {
         name: 'death-to-ie11',
         description: 'Made UI for this website.',
         visit: 'https://death-to-ie11.com/',
         code: 'https://github.com/gabLaroche/death-to-ie11',
         tags: ['HTML', 'CSS', 'VanillaJS'],
      },
      {
         name: 'pwa-weather-app',
         description: 'Same old weather app, but PWA!',
         visit: 'https://weather-pw-app.netlify.app',
         code: 'https://github.com/thesanjeevsharma/pwa-weather-app',
         tags: ['React', 'PWA'],
      },
      {
         name: 'Mooon',
         description: 'Get anonymous feedback from others',
         visit: 'http://mooonme.herokuapp.com',
         code: '',
         tags: ['React', 'Redux', 'Node', 'MongoDB'],
      },
      {
         name: 'react-music-player',
         description: 'Music player UI',
         visit: '',
         code: 'https://github.com/thesanjeevsharma/react-music-player',
         tags: ['React', 'Redux'],
      },
      {
         name: 'react-tabs-boilerplate',
         description: 'Starter code for anyone looking to add tabs to their project',
         visit: '',
         code: 'https://github.com/thesanjeevsharma/react-tabs-boilerplate',
         tags: ['React', 'Redux'],
      },
      {
         name: 'dope-pip',
         description: "PIP GUI for people who can't remember commands",
         visit: '',
         code: 'https://github.com/thesanjeevsharma/dope-pip',
         tags: ['Tkinter', 'Python'],
      },
      {
         name: 'notSoSmart-Email',
         description: 'GMail like mailing service built solely using AJAX (when I was a n00b)',
         visit: '',
         code: 'https://github.com/thesanjeevsharma/notSoSmart-Email-Service',
         tags: ['PHP', 'AJAX'],
      },
   ]

   return (
      <Layout>
         <React.Fragment>
            <section className="text-white text-center py-16">
               <h1 className="text-4xl lg:text-5xl font-bold text-purple-400 mb-8 lg:mb-16">
                  Projects
               </h1>
               <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                  {projects.map((project, index) => (
                     <div
                        key={index}
                        className="bg-gray p-4 lg:p-6 text-left flex flex-col rounded"
                     >
                        <span className="text-xl lg:text-2xl font-bold mb-2">{project.name}</span>
                        <span className="text-sm lg:text-base font-light mb-6">
                           {project.description}
                        </span>
                        <div className="flex items-baseline">
                           {project.visit && (
                              <a
                                 href={project.visit}
                                 target="_blank"
                                 className="text-purple-400 mr-4 mb-2 lg:mb-4 flex items-center"
                              >
                                 <span className="mr-1">Visit</span> <Redirect color="#B794F4" />
                              </a>
                           )}
                           {project.code && (
                              <a
                                 href={project.code}
                                 target="_blank"
                                 className="text-purple-400 mr-4 mb-2 flex items-center"
                              >
                                 <span className="mr-1">Code</span> <Redirect color="#B794F4" />
                              </a>
                           )}
                        </div>
                        <div className="flex">
                           {project.tags.map((tag, index) => (
                              <span
                                 key={index}
                                 className="p-1 lg:p-2 bg-purple-400 mr-1 lg:mr-2 mb-1 lg:mb-2 text-sm lg:text-base rounded-sm font-medium"
                              >
                                 {tag}
                              </span>
                           ))}
                        </div>
                     </div>
                  ))}
               </div>
            </section>
         </React.Fragment>
      </Layout>
   )
}

export async function getStaticProps() {
   return { props: {} }
}

export default Projects
