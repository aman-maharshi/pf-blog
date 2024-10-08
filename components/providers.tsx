'use client'

import React from 'react'
import { ThemeProvider } from 'next-themes'

const Providers = ({ children }: { children: React.ReactNode }) => {
  
  return (
    <ThemeProvider
      enableSystem={true}
      attribute='class'
      defaultTheme='system'
      disableTransitionOnChange={true}
    >
      {children}
    </ThemeProvider>

  )
}

export default Providers