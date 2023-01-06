import React from 'react'
import { Box, styled } from '@mui/material'
import { useOutlet } from 'react-router-dom'

import LayoutLoading from '../components/LayoutLoading'
import Header from '@layout/Header'
import Lazy from '@components/Lazy'
import Sidebar from '@layout/Sidebar'
import Main from '@layout/Main'

const Container = styled(Box)(
  () => ({
    display: 'flex',
  })
)

const Layout: React.FC = () => {
  const Outlet = useOutlet()

  return (
    <Container aria-label={'layout'}>
      <Header />
      <LayoutLoading />
      <Sidebar />
      <Main>
        <Lazy>
          { Outlet || undefined }
        </Lazy>
      </Main>
    </Container>
  )
}

export default Layout
