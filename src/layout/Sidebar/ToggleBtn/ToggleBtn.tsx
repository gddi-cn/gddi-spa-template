import React from 'react'
import { IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

import { useToggleBtn } from './hook'

const ToggleBtn: React.FC = () => {
  const { toggleSidebar } = useToggleBtn()
  return (
    <IconButton
      color='inherit'
      aria-label='toggle drawer'
      edge='start'
      onClick={toggleSidebar}
      sx={{ mr: 2, display: { lg: 'none' } }}
    >
      <MenuIcon />
    </IconButton>
  )
}

export default ToggleBtn
