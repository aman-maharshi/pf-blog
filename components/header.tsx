'use client'

import React from 'react'
import ThemeToggle from './themeToggle'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
  const pathname = usePathname()

  return (
    <header className='fixed inset-x-0 top-0 z-50 py-6 backdrop-blur-sm border-b'>
      <nav className='container flex max-w-[1100px] items-center justify-between'>
        <div>
          <Link href='/' className='font-serif text-2xl font-bold'>
            AM
          </Link>
        </div>

        <ul className='flex items-center gap-6 text-sm md:text-base sm:gap-10'>
          <li className={`navItem ${pathname?.includes('/posts') ? 'navLinkActive' : ''}`}>
            <Link href='/posts'>Posts</Link>
          </li>
          <li className={`navItem ${pathname?.includes('/projects') ? 'navLinkActive' : ''}`}>
            <Link href='/projects'>Projects</Link>
          </li>
          {/* <li className={`navItem ${pathname?.includes('/music') ? 'navLinkActive' : ''}`}>
            <Link href='/music'>Music</Link>
          </li> */}
          <li className={`navItem ${pathname?.includes('/contact') ? 'navLinkActive' : ''}`}>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>

        <div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}

export default Header
