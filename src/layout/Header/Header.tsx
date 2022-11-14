import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'

const Header: React.FC = () => {
  return (
    <AppBar>
      <Toolbar variant={'dense'}>
        <Typography variant={'h6'}>Gddi Spa Template</Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
