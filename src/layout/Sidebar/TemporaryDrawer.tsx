import React from 'react'
import { Drawer, Toolbar } from '@mui/material'
import { useAtom } from 'jotai'

import { sidebarOpenAtom } from '@layout/store'
import { SIDEBAR_WIDTH } from '@/config/layout'
import Logo from '../Header/Logo'
import SidebarToggleBtn from '../SidebarToggleBtn'

const TemporaryDrawer: React.FC<{ children?: React.ReactNode }> = (
  {
    children,
  }
) => {
  const [open, setOpen] = useAtom(sidebarOpenAtom)

  return (
    <Drawer
      sx={{
        boxSizing: 'border-box',
        display: { xs: 'block', lg: 'none' },
        zIndex: theme => theme.zIndex.drawer + 2,
        '& .MuiDrawer-paper': {
          width: SIDEBAR_WIDTH,
        }
      }}
      open={open}
      onClose={() => setOpen(false)}
    >
      <Toolbar variant='dense'>
        <SidebarToggleBtn />
        <Logo />
      </Toolbar>
      { children }
    </Drawer>
  )
}

export default TemporaryDrawer
