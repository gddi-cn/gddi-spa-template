import { Box, Toolbar } from '@mui/material'


const Main: React.FC<{ children?: React.ReactNode }> = (
  {
    children,
  }
) => {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }} component='main'>
      <Toolbar variant='dense' />
      { children }
    </Box>
  )
}

export default Main

