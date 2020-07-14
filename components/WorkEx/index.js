import Link from 'next/link'

const WorkEx = () => {
   const works = [
      {
         company: 'DailyKIT Inc.',
         location: 'Bangalore, Karanataka (IN)',
         title: 'Full Stack Developer',
         duration: 'Aug 2019 - Present',
      },
      {
         company: 'smartData Enterprises Inc.',
         location: 'Dehradun, Uttarakhand (IN)',
         title: 'Full Stack Intern + Associate',
         duration: 'Jan 2019 - Oct 2019',
      },
      {
         company: 'Swaaha',
         location: 'Indore, Madhya Pradesh (IN) [Remote]',
         title: 'Freelance Web Developer',
         duration: 'Jan 2018 - May 2018',
      },
      {
         company: 'Apptunix',
         location: 'Mohali, Punjab (IN)',
         title: 'UI/UX & Web Design Intern',
         duration: 'May 2017 - Jun 2017',
      },
   ]

   return (
      <section className="py-8 lg:py-32 text-white text-center">
         <h1 className="text-2xl lg:text-4xl font-bold text-purple-400 mb-8 lg:mb-16">
            {' '}
            Work Experience
         </h1>
         <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
            {works.map((work, index) => (
               <div key={index} className="bg-gray p-2 lg:p-4 text-left flex flex-col rounded">
                  <span className="font-semibold lg:text-xl">{work.company}</span>
                  <span className="text-xs lg:text-base mb-4 lg:mb-8 font-light">
                     {work.location}
                  </span>
                  <span className="text-purple-400 lg:text-lg">{work.title}</span>
                  <span className="text-sm">{work.duration}</span>
               </div>
            ))}
         </div>
         <div className="mt-16 text-center">
            <Link href="/map">
               <a className="hover:text-green-400">View on Map</a>
            </Link>
         </div>
      </section>
   )
}

export default WorkEx
