import React from 'react'
import { useAtom }  from 'jotai'
import { Box, List } from '@mui/material'

import menuList from './menuList'
import { sidebarOpenAtom } from '@/layout/store'
import NestedMenuItem from './NestedMenuItem'
import MenuItem from './MenuItem'
import { SIDEBAR_WIDTH } from '@/config/layout'

const Menu: React.FC = () => {
  const [open] = useAtom(sidebarOpenAtom)

  return (
    <Box
      sx={{
        height: 'calc(100vh - 48px)',
        width: SIDEBAR_WIDTH,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          overflowX: 'hidden',
          overflowY: 'scroll',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        <List
          sx={{
            height: 'calc(100vh - 48px)',
            width: SIDEBAR_WIDTH,
          }}
        >
          {
            menuList.map(menu => menu.hasOwnProperty('children') ? (
              <NestedMenuItem {...menu as Menu.NestedItem} key={menu.id} open={open} />
            ) : (
              <MenuItem key={menu.id} {...menu as Menu.Item} open={open} />
            ))
          }
        </List>
      </Box>
    </Box>
  )
}

export default Menu
