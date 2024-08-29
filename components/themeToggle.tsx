'use client'

import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false) // wont be running this on server as we dont have access to theme there
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])
  
  if (!mounted) return null

  return (
    <Button
      size={'sm'}
      variant={'ghost'}
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')} 
    >
      {resolvedTheme === 'dark' ? (
        <SunIcon className='size-4 text-white' />
      ) : (
        <MoonIcon className='size-4 text-zinc-900' />
      )}
    </Button>
  )
}

export default ThemeToggle