import React from 'react'
import { RouteObject } from 'react-router-dom'

import Lazy from '@components/Lazy'
import DynamicImportFailed from '@components/DynamicImportFailed/DynamicImportFailed'

const Dashboard = React.lazy(() => import('@pages/Dashboard'))

const dashboardRoute: RouteObject = {
  index: true,
  element: (
    <Lazy>
      <Dashboard />
    </Lazy>
  ),
  errorElement: <DynamicImportFailed />,
}

export default dashboardRoute
