import React from 'react'

import MiniDrawer from './MiniDrawer'
import TemporaryDrawer from './TemporaryDrawer'

import Menu from '@/menu'

const Sidebar: React.FC = () => {

  return (
    <>
      <MiniDrawer>
        <Menu />
      </MiniDrawer>
      <TemporaryDrawer>
        <Menu />
      </TemporaryDrawer>
    </>
  )
}

export default Sidebar
