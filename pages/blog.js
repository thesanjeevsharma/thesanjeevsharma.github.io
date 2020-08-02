import { Layout } from '../components'
import Link from 'next/link'

const Blog = () => {
   const articles = [
      {
         title: 'useState Everywhere? Nope!',
         link: 'https://dev.to/thesanjeevsharma/usestate-everywhere-nope-3g9h',
         tags: ['webdev', 'optimization', 'react'],
      },
      {
         title: 'Useful JS array methods to level up your game',
         link: '',
         tags: ['javascript', 'array'],
      },
   ]

   return (
      <Layout>
         <React.Fragment>
            <section className="min-h-screen py-16 text-white text-center">
               <h1 className="text-4xl lg:text-5xl font-bold text-orange-400 mb-8 lg:mb-16">
                  Blog
               </h1>
               <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                  {articles.map((article) => (
                     <a href={article.link} target="_blank" key={article.title}>
                        <div className="p-2 lg:py-6 lg:px-4 text-left border border-solid border-matte rounded cursor-pointer hover:border-orange-400">
                           <h3 className="text-xl font-medium truncate mb-2">{article.title}</h3>
                           {article.tags.map((tag) => (
                              <span key={tag} className="bg-orange-400 mr-4 p-1 rounded">
                                 {`#${tag}`}
                              </span>
                           ))}
                        </div>
                     </a>
                  ))}
               </div>
            </section>
         </React.Fragment>
      </Layout>
   )
}

export default Blog
