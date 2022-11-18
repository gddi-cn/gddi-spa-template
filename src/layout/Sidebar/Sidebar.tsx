import React from 'react'
import { Box } from '@mui/material'
import MiniPermanent from './MiniPermanent/MiniPermanent'
import { SIDEBAR_WIDTH } from '@/config/layout'

const Sidebar: React.FC = () => {
  return (
    <Box
      component={'nav'}
      sx={{ width: { lg: SIDEBAR_WIDTH }, flexShrink: { lg: 0 } }}
      aria-label={'sidebar'}
    >
      <MiniPermanent>
        1
      </MiniPermanent>
    </Box>
  )
}

export default Sidebar
