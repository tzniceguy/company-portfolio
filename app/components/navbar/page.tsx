'use client'
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries, CiCircleRemove  } from 'react-icons/ci';
import { IoMdConstruct } from 'react-icons/io';

export default function NavBar() {
  const currentPath = usePathname();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const links = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '#services' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/about#contact' },
  ];

  return (
    <nav
      className={`bg-white border-gray-200 dark:bg-gray-900 ${
        isNavOpen ? 'fixed top-0 left-0 w-full h-screen z-50' : ''
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <IoMdConstruct className="text-3xl" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Furute Allied 
          </span>
        </Link>

        <button
          onClick={toggleNav}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isNavOpen ? 'true' : 'false'}
        >
          <CiMenuFries />
        </button>

        <div
          id="navbar-default"
          className={`absolute top-0 left-0 flex flex-col p-4 mt-4 w-full bg-gray-50 dark:bg-gray-800 transition duration-300 ease-in-out transform ${
            isNavOpen ? '-translate-x-0' : '-translate-x-full'
          }`}
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  className={`${
                    link.href === currentPath ? 'text-zinc-900' : 'text-zinc-500'
                  } hover:text-zinc-800 block py-2 px-3 text-white rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 transition-colors`}
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <button onClick={toggleNav}className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-600">
            <CiCircleRemove />
            </button>
        </div>
      </div>
    </nav>
  );
}
