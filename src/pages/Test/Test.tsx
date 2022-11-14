import React from 'react'
import { Box, FormControl, FormControlLabel } from '@mui/material'
import SpringDemo from '@components/SpringDemo'
import DraggableList from '@components/DraggableList'
import TodoList from '@components/TodoList'
import ThemeModeSwitch from '@components/ThemeModeSwitch'

const Test: React.FC = () => {
  return (
    <Box
      pt={5}
      height={'100vh'} width={'100vw'} display={'flex'}
      sx={{ flexDirection: 'column', alignItems: 'center' }}
    >
      <Box mt={4}>
        <FormControl>
          <FormControlLabel
            control={(
              <ThemeModeSwitch />
            )}
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
      <Box mt={4}>
        <TodoList />
      </Box>
    </Box>
  )
}

export default Test