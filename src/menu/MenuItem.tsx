import React from 'react'
import { ListItemButton, ListItemIcon, ListItemText, Tooltip } from '@mui/material'

import { useMenuItem } from './hook'


const MenuItem: React.FC<Menu.Item & { open: boolean, level?: number }> = (
  {
    path,
    icon,
    label,
    open,
    level = 0
  }
) => {

  const { handleClick, match } = useMenuItem(path)

  return (
    <Tooltip
      title={ open ? '' : label}
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
          position: 'relative',
          minHeight: 48,
          justifyContent: { xs: 'inherit', lg: open ? 'inherit' : 'center' },
          px: 2.5,
          '&::before': {
            display: 'block',
            position: 'absolute',
            content: '""',
            left: 0,
            height: match ? '100%' : 0,
            width: 3,
            bgcolor: 'secondary.main',
            transition: theme => theme.transitions.create('height', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            })
          }
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: { xs: 3, lg: open ? 3 : 'auto' },
            justifyContent: 'center',
            pl: { xs: level * 4, lg: open ? level * 4 : 0 },
            color: match ? 'primary.main' : undefined,
            transition: theme => theme.transitions.create('padding-left', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            })
          }}
        >
          { icon }
        </ListItemIcon>
        <ListItemText
          primary={label}
          sx={{
            opacity: { xs: 1, lg: open ? 1 : 0 },
            color: match ? 'primary.main' : undefined,
          }}
        />
      </ListItemButton>
    </Tooltip>
  )
}

export default MenuItem
