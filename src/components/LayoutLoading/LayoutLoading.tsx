import React from 'react'
import { Box, LinearProgress, Toolbar } from '@mui/material'
import { useAtom } from 'jotai'
import { loadingAtom } from '@components/LayoutLoading/store'

const LayoutLoading: React.FC = () => {
  const [loading] = useAtom(loadingAtom)

  return (
    <Box sx={theme => ({ zIndex: theme.zIndex.appBar - 1, position: 'relative' })}>
      <Toolbar variant={'dense'} />
      {
        loading ? (
          <LinearProgress
            color='secondary'
            sx={{
              position: 'absolute',
              bottom: -4,
              right: 0,
              left: 0,
              zIndex: theme => theme.zIndex.drawer + 1
            }}
          />
        ) : null
      }
    </Box>
  )
}

export default LayoutLoading
