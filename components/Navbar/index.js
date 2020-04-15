import Link from 'next/link'
import { useRouter } from 'next/router'

import { Home, Tv, Code } from '../../assets/icons'

const Navbar = () => {
   const router = useRouter()

   console.log()

   return (
      <nav className="h-16 px-4 fixed bg-gray w-full flex items-center justify-between">
         <Link href="/">
            <span className="text-white text-sm">
               <Home />
            </span>
         </Link>
         <div className="grid grid-cols-2 gap-4">
            <Link href="/projects">
               <span
                  className={
                     router.pathname.includes('projects')
                        ? 'text-purple-400'
                        : 'text-white cursor-pointer hover:text-purple-400'
                  }
               >
                  Projects
               </span>
            </Link>
            <Link href="/courses">
               <span
                  className={
                     router.pathname.includes('courses')
                        ? 'text-green-400'
                        : 'text-white cursor-pointer hover:text-green-400'
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
