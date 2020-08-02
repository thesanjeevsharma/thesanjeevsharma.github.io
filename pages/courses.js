import { Layout } from '../components'

const Courses = () => {
   const courses = [
      {
         title: 'ReactJS A-Z',
         link:
            'https://www.youtube.com/watch?v=d-F5kncjrAI&list=PLTOzMSmz95SjjuwU1KN38x-sV372NY8NX',
         img: '/img/react.png',
      },
      {
         title: 'ReactJS To Do List',
         link:
            'https://www.youtube.com/watch?v=-1KGRfukoh0&list=PLTOzMSmz95Sjz-DkLiFVLow0Z9dIyhGwz',
         img: '/img/todo.png',
      },
      {
         title: 'MongoDB',
         link: 'https://youtu.be/nqNv7K9PxpM',
         img: '/img/mongodb.png',
      },
      {
         title: 'Redux',
         link:
            'https://www.youtube.com/watch?v=-1KGRfukoh0&list=PLTOzMSmz95Sjz-DkLiFVLow0Z9dIyhGwz',
         img: '/img/redux.png',
      },
      {
         title: 'Git and GitHub',
         link: 'https://youtu.be/Z7tZStaPx_s',
         img: '/img/github.png',
      },
      {
         title: 'Python',
         link:
            'https://www.youtube.com/watch?v=TcseDjj1uec&list=PLTOzMSmz95SgOI-CaH75_fTdlva5YipI3',
         img: '/img/python.png',
      },
   ]

   return (
      <Layout>
         <React.Fragment>
            <section className="min-h-screen py-16 text-white text-center">
               <h1 className="text-4xl lg:text-5xl font-bold text-green-400 mb-8 lg:mb-16">
                  Courses
               </h1>
               <p className="mb-8 text-lg">
                  I make{' '}
                  <a
                     rel="prefetch"
                     href="https://www.youtube.com/channel/UCY_vbr0bXJHb_Ylh9rw51lg"
                     target="_blank"
                     className="underline hover:text-green-400"
                  >
                     YouTube videos
                  </a>{' '}
                  in hindi; because there's already too much content in english.
               </p>
               <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                  {courses.map((course) => (
                     <a
                        href={course.link}
                        target="_blank"
                        className="border border-solid border-green-400 rounded overflow-hidden"
                        key={course.title}
                     >
                        <img src={course.img} />
                        <h3 className="p-4 font-semibold hover:bg-green-600">{course.title}</h3>
                     </a>
                  ))}
               </div>
            </section>
         </React.Fragment>
      </Layout>
   )
}

export default Courses
