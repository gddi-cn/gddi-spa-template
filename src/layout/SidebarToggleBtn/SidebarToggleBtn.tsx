import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { useAtom } from 'jotai';
import { IconButton, Tooltip } from '@mui/material';

import { sidebarOpenAtom } from '../store'

const SidebarToggleBtn: React.FC = () => {
  const [open, setOpen] = useAtom(sidebarOpenAtom)

  const handleClick = () => {
    setOpen(o => !o)
  }

  return (
    <Tooltip
      title={ open ? '收起菜单' : '展开菜单' }
      placement='bottom'
    >
      <IconButton
        color='inherit' sx={{ mr: 3 }}
        onClick={handleClick} edge='start'
      >
        <MenuIcon />
      </IconButton>
    </Tooltip>
  )
}

export default SidebarToggleBtn
