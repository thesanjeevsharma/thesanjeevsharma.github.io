import Link from 'next/link'

import { Home, Tv, Code } from '../../assets/icons'

const Navbar = () => {
   return (
      <nav className="h-16 px-4 fixed bg-gray w-full flex items-center justify-between">
         <Link href="/">
            <span className="text-white text-sm">
               <Home />
            </span>
         </Link>
         <div className="grid grid-cols-2 gap-4">
            <Link href="/projects">
               <span className="text-white">Projects</span>
            </Link>
            <Link href="/courses">
               <span className="text-white">Courses</span>
            </Link>
         </div>
      </nav>
   )
}

export default Navbar
