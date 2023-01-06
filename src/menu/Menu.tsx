import React from 'react'
import { useAtom }  from 'jotai'
import { List } from '@mui/material'

import menuList from './menuList'
import { sidebarOpenAtom } from '@/layout/store'
import NestedMenuItem from './NestedMenuItem'
import { useNavigate } from 'react-router-dom'
import MenuItem from './MenuItem'

const Menu: React.FC = () => {
  const [open] = useAtom(sidebarOpenAtom)

  return (
    <List>
      {
        menuList.map(menu => menu.children ? (
          <NestedMenuItem {...menu} key={menu.id} open={open} />
        ) : (
          <MenuItem key={menu.id} {...menu} open={open} />
        ))
      }
    </List>
  )
}

export default Menu

