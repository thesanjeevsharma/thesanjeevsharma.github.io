import { fetchArticles } from '../api'
import { Layout } from '../components'

const Blog = () => {
   const [error, setError] = React.useState('')
   const [loading, setLoading] = React.useState(true)
   const [articles, setArticles] = React.useState([])

   React.useEffect(() => {
      ;(async () => {
         try {
            const { data, status } = await fetchArticles()
            if (status === 200) {
               setArticles(data)
            } else {
               throw Error('Sorry! Failed to fetch articles.')
            }
         } catch (err) {
            console.log(err)
            setError(err.message)
         } finally {
            setLoading(false)
         }
      })()
   }, [])

   return (
      <Layout>
         <>
            <section className="min-h-screen py-16 text-white text-center">
               <h1 className="text-4xl lg:text-5xl font-bold text-orange-400 mb-8 lg:mb-16">
                  Blog
               </h1>
               {loading ? (
                  <p> Hold on, fetching the good stuff... </p>
               ) : (
                  <>
                     {Boolean(error) ? (
                        <p> {error} </p>
                     ) : (
                        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                           {articles.map((article) => (
                              <a href={article.url} target="_blank" key={article.title}>
                                 <div className="p-2 lg:py-6 lg:px-4 text-left border border-solid border-orange-100 rounded cursor-pointer hover:border-orange-400">
                                    <h3 className="text-xl font-medium truncate mb-2">
                                       {article.title}
                                    </h3>
                                    <div className="flex flex-wrap">
                                       {article.tag_list.map((tag) => (
                                          <span key={tag} className="bg-orange-400 m-1 p-1 rounded">
                                             {tag}
                                          </span>
                                       ))}
                                    </div>
                                 </div>
                              </a>
                           ))}
                        </div>
                     )}
                  </>
               )}
            </section>
         </>
      </Layout>
   )
}

export default Blog
