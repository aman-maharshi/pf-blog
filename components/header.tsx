import React from 'react'
import ThemeToggle from './themeToggle'
import Link from 'next/link'

const Header = () => {

  return (
    <header className='fixed inset-x-0 top-0 z-50 py-6 backdrop-blur-sm border-b'>
      <nav className='container flex max-w-[1100px] items-center justify-between'>
        <div>
          <Link href='/' className='font-serif text-2xl font-bold'>
            AM
          </Link>
        </div>

        <ul className='flex items-center gap-6 text-sm md:text-base sm:gap-10'>
          <li className='navItem'>
            <Link href='/posts'>Posts</Link>
          </li>
          <li className='navItem'>
            <Link href='/projects'>Projects</Link>
          </li>
          {/* <li className='navItem'>
            <Link href='/music'>Music</Link>
          </li> */}
          <li className='navItem'>
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
