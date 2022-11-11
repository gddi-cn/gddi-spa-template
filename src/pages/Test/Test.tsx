import React from 'react'
import { useCounter } from './hook'
import { Box, Button, Typography } from '@mui/material'

const Test: React.FC = () => {
  const { count, handleAdd, handleReduce } = useCounter(0)

  return (
    <Box
      pt={5}
      height={'100vh'} width={'100vw'} display={'flex'}
      sx={{ flexDirection: 'column', alignItems: 'center' }}
    >
      <Typography variant={'h2'}>{count}</Typography>
      <Box pt={2} sx={{ display: 'grid', gridTemplate: 'repeat(1, 1fr)/repeat(2, 1fr)', gridColumnGap: 16 }}>
        <Button variant={'outlined'} color={'warning'} onClick={handleReduce}> - 1</Button>
        <Button variant={'outlined'} color={'success'} onClick={handleAdd}> + 1</Button>
      </Box>
    </Box>
  )
}

export default Test