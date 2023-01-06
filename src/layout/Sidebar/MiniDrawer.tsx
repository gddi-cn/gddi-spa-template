import { Drawer as MuiDrawer, styled, Theme, CSSObject, Toolbar } from '@mui/material'
import { SIDEBAR_WIDTH } from '@/config/layout'
import { useAtom } from 'jotai'
import { sidebarOpenAtom } from '@layout/store'
import React from 'react'

const openedMixin = (theme: Theme): CSSObject => ({
  width: SIDEBAR_WIDTH,
  backgroundColor: 'transparent',
  borderRight: 'unset',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  backgroundColor: 'transparent',
  borderRight: 'unset',
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const D = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: SIDEBAR_WIDTH,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const MiniDrawer: React.FC<{ children?: React.ReactNode }> = (
  {
    children,
  }
) => {
  const [open] = useAtom(sidebarOpenAtom)

  return (
    <D
      variant={'permanent'}
      open={open}
      sx={{ display: { xs: 'none', lg: 'block' } }}
    >
      <Toolbar variant='dense' />
      { children }
    </D>
  )
}

export default MiniDrawer

