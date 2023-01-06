import React from 'react'
import { useAtom }  from 'jotai'
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'

import { sidebarOpenAtom } from '@/layout/store'
import { useNavigate } from 'react-router-dom'

const MenuItem: React.FC<Menu.Instance & { open: boolean, sub?: boolean }> = (
  {
    path,
    icon,
    label,
    open,
    sub = false,
  }
) => {
  const navigate = useNavigate()

  return (
    <ListItemButton
      onClick={() => navigate(path || '/')}
      sx={{
        minHeight: 48,
        justifyContent: { xs: 'inherit', lg: open ? 'inherit' : 'center' },
        px: 2.5,
      }}
    >
      {
        icon ? (
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: { xs: 3, lg: open ? 3 : 'auto' },
              justifyContent: 'center',
              pl: { xs: sub ? 4 : 0, lg: sub && open ? 4 : 0 },
              transition: theme => theme.transitions.create('padding-left', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
              })
            }}
          >
            { icon }
          </ListItemIcon>
        ) : null
      }
      <ListItemText primary={label} sx={{ opacity: { xs: 1, lg: open ? 1 : 0 } }} />
    </ListItemButton>
  )
}

export default MenuItem
