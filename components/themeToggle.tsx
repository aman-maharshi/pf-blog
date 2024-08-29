'use client'

import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false)
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
      Toggle Theme
    </Button>
  )
}

export default ThemeToggle