'use client'
import React, {useState} from 'react'
import {usePathname} from 'next/navigation'
import Link from 'next/link'
import { CiMenuFries } from "react-icons/ci";
import { IoMdConstruct } from "react-icons/io";



export default function NavBar() {
  const currentPath = usePathname()

  const [isNavOpen, setNavOpen] = useState(false)

  const toggleNav = () => {
    setNavOpen(!isNavOpen)
    console.log('clicked')
  }

  // array for link 
  const links= [
    {label:'Home', href:'/'},
    {label:'services', href:'#services'},
    {label:'testimonials', href:'#testimonials'},
    {label:'about', href:'/about'},
    {label:'contact', href:'/about#contact'},
  ]

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
           <IoMdConstruct className='text-3xl'/>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Future Alied</span>
        </Link>
        <button onClick={toggleNav}
        data-collapse-toggle="navbar-default" 
        type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
        aria-controls="navbar-default" 
        aria-expanded={isNavOpen ? 'true' : 'false'}>
          <CiMenuFries />
        </button>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {links.map(link => (
              <li key={link.href}>
                <Link className={`${link.href === currentPath ? "text-zinc-900" :"text-zinc-500"} hover:text-zinc-800 block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 transiton-colors`} href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
