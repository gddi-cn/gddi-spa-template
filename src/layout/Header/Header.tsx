import React from 'react'
import { AppBar, Toolbar } from '@mui/material'
import Logo from './Logo'
import ToggleBtn from '@layout/Sidebar/ToggleBtn'

const Header: React.FC = () => {
  return (
    <AppBar sx={{ zIndex: theme => theme.zIndex.drawer + 1 }}>
      <Toolbar variant={'dense'}>
        <ToggleBtn />
        <Logo />
      </Toolbar>
    </AppBar>
  )
}

export default Header
