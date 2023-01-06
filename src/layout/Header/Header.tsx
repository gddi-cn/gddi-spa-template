import React from 'react'
import { AppBar, Toolbar, Box } from '@mui/material'
import Logo from './Logo'
import SidebarToggleBtn from '@layout/SidebarToggleBtn'
import ThemeModeSwitch from '@/components/ThemeModeSwitch'

const Header: React.FC = () => {
  return (
    <AppBar sx={{ zIndex: theme => theme.zIndex.drawer + 1 }}>
      <Toolbar variant={'dense'}>
        <SidebarToggleBtn />
        <Logo />
        <Box sx={{ flex: 1 }} />
        <ThemeModeSwitch />
      </Toolbar>
    </AppBar>
  )
}

export default Header
