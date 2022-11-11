import React from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'

import { useCustomTheme } from './hook'

const Theme: React.FC<{ children?: React.ReactNode }> = (
  {
    children,
  }
) => {
  const theme = useCustomTheme()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export default Theme
