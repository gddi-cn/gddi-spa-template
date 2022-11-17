import React from 'react'
import { RouteObject } from 'react-router-dom'

import { Paths } from '@shared/enums/paths'
import dashboardRoute from './dashboard'
import testRoute from './test'
import PrimaryLoading from '@components/PrimaryLoading'

const Layout = React.lazy(() => import('@/layout'))

const layoutRoute: RouteObject = {
  path: Paths.Primary.LAYOUT,
  element: (
    <Layout />
  ),
  children: [
    dashboardRoute,
    testRoute,
  ]
}

export default layoutRoute
