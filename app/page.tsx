import ThemeToggle from '@/components/themeToggle'
import { Button } from '@/components/ui/button'
import React from 'react'

const Home = () => {
  return (
    <section className="py-4">
      <div className="container">
        <div className='flex items-center justify-between mt-4'>
          <h1 className="text-2xl font-bold">Home</h1>

          <ThemeToggle />
        </div>
      </div>
    </section>
  )
}

export default Home