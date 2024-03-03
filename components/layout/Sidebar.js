'use client'
import Link from "next/link"
import { usePathname } from 'next/navigation'

export const SideBar = () => {

     const pathname = usePathname()

     return(
          <aside className="md:w-2/5 xl:w-1/5 bg-gray-800">
               <div className="p-6">
                    <p className="uppercase text-white text-2xl tracking-wide text-center font-bold">
                         Fogato App
                    </p>

                    <p className="mt-3 text-gray-600">
                         Administra tu restaurant en las siguientes opciones:
                    </p>

                    <nav className="mt-10">
                         <Link href={'/orders'} className={`link p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900 ${pathname === '/orders' ? 'active' : ''}`}>Orders</Link>
                         <Link href={'/menu'} className={`link p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900 ${pathname === '/menu' ? 'active' : ''}`}>Menu</Link>
                    </nav>
               </div>
          </aside>
     )
}