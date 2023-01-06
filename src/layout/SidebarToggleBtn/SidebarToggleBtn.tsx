import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { useAtom } from 'jotai';
import { IconButton } from '@mui/material';

import { sidebarOpenAtom } from '../store'

const SidebarToggleBtn: React.FC = () => {
  const [, setOpen] = useAtom(sidebarOpenAtom)

  const handleClick = () => {
    setOpen(o => !o)
  }

  return (
    <IconButton
      color='inherit' sx={{ mr: 3 }}
      onClick={handleClick} edge='start'
    >
      <MenuIcon />
    </IconButton>
  )
}

export default SidebarToggleBtn
