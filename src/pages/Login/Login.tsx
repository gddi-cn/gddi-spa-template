import React from 'react'
import { Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { Paths } from '@shared/enums/paths'

const Login: React.FC = () => {
  const navigate = useNavigate()

  return (
    <>
      <Typography variant={'h2'}>Login page</Typography>
      <Button onClick={() => navigate(Paths.Primary.LAYOUT)}>Dashboard</Button>
    </>
  )
}

export default Login
