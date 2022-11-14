import React from 'react'
import { Box, CircularProgress } from '@mui/material'

const PrimaryLoading: React.FC = () => {
  return (
    <Box mt={4} display={'flex'} justifyContent={'center'}>
      <CircularProgress />
    </Box>
  )
}

export default PrimaryLoading
