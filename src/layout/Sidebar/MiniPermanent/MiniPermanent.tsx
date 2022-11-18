import React from 'react'
import { useAtom } from 'jotai'

import { sidebarOpenAtom } from '@layout/Sidebar/store'
import MiniDrawer from './MiniDrawer'
import { Toolbar } from '@mui/material'

interface PermanentProps {
  children?: React.ReactNode;
}

const MiniPermanent: React.FC<PermanentProps> = (
  {
    children,
  }
) => {
  const [open] = useAtom(sidebarOpenAtom)

  return (
    <MiniDrawer variant={'permanent'} open={open}>
      <Toolbar variant={'dense'} />
      {children}
    </MiniDrawer>
  )
}

export default MiniPermanent
