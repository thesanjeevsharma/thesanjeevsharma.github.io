import axios from 'axios'

export const fetchArticles = async () => {
   const data = axios.get('https://dev.to/api/articles?username=thesanjeevsharma')
   return data
}
