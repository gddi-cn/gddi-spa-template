import React from 'react'
import ExpandLess from '@mui/icons-material/ExpandLess';

import { useNestedMenuItem } from './hook'
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import MenuItem from '@/menu/MenuItem'

const NestedMenuItem: React.FC<Menu.Instance & { open: boolean }> = (
  {
    open,
    label,
    children,
  }
) => {
  const { expand, handleClick } = useNestedMenuItem()

  return children?.length ? (
    <>
      <ListItemButton
        onClick={handleClick}
        sx={{
          minHeight: 48,
          justifyContent: { xs: 'inherit', lg: open ? 'inherit' : 'center' },
          px: 2.5,
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: { xs: 3, lg: open ? 3 : 'auto' },
            justifyContent: 'center',
          }}
        >
          { expand ? <ExpandLess /> : children[0].icon }
        </ListItemIcon>
        <ListItemText primary={label} sx={{ opacity: { xs: 1, lg: open ? 1 : 0 } }} />
      </ListItemButton>
      <Collapse in={expand} timeout={'auto'} unmountOnExit>
        <List component={'div'} disablePadding>
          {
            children.map((subMenu, idx) => (
              <MenuItem
                key={`${subMenu.label}_sub_${idx}`}
                id={`${subMenu.label}_sub_${idx}`}
                sub open={open}
                {...subMenu}
              />
            ))
          }
        </List>
      </Collapse>
    </>
  ) : null
}

export default NestedMenuItem

