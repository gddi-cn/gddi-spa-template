import React from 'react'
import { RouteObject } from 'react-router-dom'

import { Paths } from '@shared/enums/paths'
import dashboardRoute from './dashboard'
import userRoute from './user'
import groupRoute from './group'
import testRoute from './test'

const Layout = React.lazy(() => import('@/layout'))

const layoutRoute: RouteObject = {
  path: Paths.Primary.LAYOUT,
  element: (
    <Layout />
  ),
  children: [
    dashboardRoute,
    userRoute,
    groupRoute,
    testRoute,
  ]
}

export default layoutRoute
