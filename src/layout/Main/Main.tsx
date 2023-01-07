import { Box } from '@mui/material'


const Main: React.FC<{ children?: React.ReactNode }> = (
  {
    children,
  }
) => {
  return (
    <Box sx={{ flexGrow: 1, p: 1 }} component='main'>
      { children }
    </Box>
  )
}

export default Main

