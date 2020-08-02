import Link from 'next/link'
import { useRouter } from 'next/router'

import { Home, Tv, Code } from '../../assets/icons'

const Navbar = () => {
   const router = useRouter()

   return (
      <nav className="h-16 px-4 lg:px-16 fixed bg-gray w-full flex items-center justify-between z-10">
         <Link href="/">
            <span className="text-white text-sm">
               <Home />
            </span>
         </Link>
         <div className="grid grid-cols-3 gap-4 lg:gap-8 lg:text-lg">
            <Link href="/projects">
               <span
                  className={
                     router.pathname.includes('projects')
                        ? 'text-purple-400 text-center'
                        : 'text-white text-center cursor-pointer hover:text-purple-400'
                  }
               >
                  Projects
               </span>
            </Link>
            <Link href="/blog">
               <span
                  className={
                     router.pathname.includes('blog')
                        ? 'text-orange-400 text-center'
                        : 'text-white text-center cursor-pointer hover:text-orange-400'
                  }
               >
                  Blog
               </span>
            </Link>
            <Link href="/courses">
               <span
                  className={
                     router.pathname.includes('courses')
                        ? 'text-green-400 text-center'
                        : 'text-white text-center cursor-pointer hover:text-green-400'
                  }
               >
                  Courses
               </span>
            </Link>
         </div>
      </nav>
   )
}

export default Navbar
