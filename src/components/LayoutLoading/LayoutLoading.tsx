import React from 'react'
import { Box, LinearProgress } from '@mui/material'
import { useAtom } from 'jotai'
import { loadingAtom } from '@components/LayoutLoading/store'

const LayoutLoading: React.FC = () => {
  const [loading] = useAtom(loadingAtom)

  return (
    <Box sx={theme => ({ zIndex: theme.zIndex.appBar - 1, position: 'relative' })}>
      {
        loading ? (
          <LinearProgress sx={{ position: 'absolute', top: 0, right: 0, left: 0 }} />
        ) : null
      }
    </Box>
  )
}

export default LayoutLoading
