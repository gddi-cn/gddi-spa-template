import React from 'react'
import ExpandLess from '@mui/icons-material/ExpandLess';

import { useNestedMenuItem } from './hook'
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText, Tooltip } from '@mui/material'
import MenuItem from '@/menu/MenuItem'

const NestedMenuItem: React.FC<Menu.NestedItem & { open: boolean }> = (
  {
    open,
    label,
    children,
  }
) => {
  const { expand, handleClick } = useNestedMenuItem()

  return children?.length ? (
    <>
      <Tooltip
        title={ open ? '' : (expand ? '收起' : label)}
        placement='left'
        PopperProps={{
          sx: {
            marginLeft: '-186px!important'
          }
        }}
      >
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
      </Tooltip>
      <Collapse in={expand} timeout={'auto'} unmountOnExit>
        <List component={'div'} disablePadding>
          {
            children.map(subMenu => (
              <MenuItem
                key={subMenu.id}
                level={1}
                open={open}
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

