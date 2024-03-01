'use client'
import React from 'react'
import Link from  'next/link'
import { usePathname } from 'next/navigation';
import { IoMdConstruct } from "react-icons/io";

export default function Footer() {
    const currentPath = usePathname()
    const links = [
        { label: 'Home', href: '/' },
        { label: 'Services', href: '#services' },
        { label: 'Testimonials', href: '#testimonials' },
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/about#contact' },
      ];
  return (
    <footer className="fixed bottom-0 w-full bg-white rounded-lg shadow dark:bg-gray-900 m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
                <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                    <IoMdConstruct className='text-3xl'></IoMdConstruct>
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Future Alied</span>
                </a>
                <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                {links.map((link) => (
              <li key={link.href}>
                <Link
                  className={`${
                    link.href === currentPath ? 'text-zinc-900' : 'text-zinc-500'
                  } hover:text-zinc-800 hover:underline me-4 md:me-6`}
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
                </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" className="hover:underline">Future Alied</a>. All Rights Reserved.</span>
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">Designed and Developed by <Link href="https://tzniceguy.vercel.app" className="hover:underline">Tzniceguy</Link>. All Rights Reserved.</span>
        </div>
    </footer>
  )
}
