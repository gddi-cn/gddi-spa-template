import React from 'react'
import { useCounter, useMode } from './hook'
import { Box, Button, FormControl, FormControlLabel, Switch, Typography } from '@mui/material'
import SpringDemo from '@components/SpringDemo'
import DraggableList from '@components/DraggableList'

const Test: React.FC = () => {
  const { count, handleAdd, handleReduce } = useCounter(0)
  const { mode, handleModeChange } = useMode()

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
      <Box mt={4}>
        <FormControl>
          <FormControlLabel
            control={
              <Switch
                color={'secondary'} checked={mode === 'dark'}
                onChange={(_, checked) => handleModeChange(checked)}
              />
            }
            label={'dark'}
            labelPlacement={'start'}
          />
        </FormControl>
      </Box>
      <Box mt={4}>
        <SpringDemo />
      </Box>
      <Box mt={4}>
        <DraggableList />
      </Box>
    </Box>
  )
}

export default Test