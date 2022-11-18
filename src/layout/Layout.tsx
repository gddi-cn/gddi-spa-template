import React from 'react'
import { Box, Button, Toolbar } from '@mui/material'
import { useNavigate, useOutlet } from 'react-router-dom'
import LayoutLoading from '../components/LayoutLoading'
import Header from '@layout/Header'
import { Paths } from '@shared/enums/paths'
import Lazy from '@components/Lazy'
import Sidebar from '@layout/Sidebar'

const Layout: React.FC = () => {
  const Outlet = useOutlet()
  const navigate = useNavigate()

  return (
    <Box aria-label={'layout'}>
      <Header />
      <Toolbar variant={'dense'} />
      <LayoutLoading />
      <Sidebar />
      <Button onClick={() => navigate(Paths.Layout.DASHBOARD)}>Dashboard</Button>
      <Button onClick={() => navigate(Paths.Layout.TEST)}>Test</Button>
      <Box component={'main'}>
        <Lazy>
          { Outlet || undefined }
        </Lazy>
      </Box>
    </Box>
  )
}

export default Layout
