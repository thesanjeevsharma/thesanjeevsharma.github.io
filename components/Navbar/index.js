import Link from 'next/link'

import { Menu } from '../../assets/icons'

const Navbar = () => {
   return (
      <nav className="h-16 px-4 fixed bg-gray w-full flex items-center justify-between">
         <Link href="/">
            <span className="text-white text-sm">@thesanjeevsharma</span>
         </Link>
         <span>
            <Menu />
         </span>
      </nav>
   )
}

export default Navbar
