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
      <section className="py-8 text-white text-center">
         <h1 className="text-2xl font-bold text-purple-400 mb-8"> Work Experience</h1>
         <div className="flex flex-col">
            {works.map((work) => (
               <div className="bg-gray p-2 text-left flex flex-col mb-4">
                  <span className="font-semibold">{work.company}</span>
                  <span className="text-xs mb-4 font-thin">{work.location}</span>
                  <span className="text-purple-400">{work.title}</span>
                  <span className="text-sm">{work.duration}</span>
               </div>
            ))}
         </div>
      </section>
   )
}

export default WorkEx
