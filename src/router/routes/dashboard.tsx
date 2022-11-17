import React from 'react'
import { RouteObject } from 'react-router-dom'

import DynamicImportFailed from '@components/DynamicImportFailed/DynamicImportFailed'
import LayoutPage from '@layout/LayoutPage'

const Dashboard = React.lazy(() => import('@pages/Dashboard'))

const dashboardRoute: RouteObject = {
  index: true,
  element: (
    <LayoutPage>
      <Dashboard />
    </LayoutPage>
  ),
  errorElement: <DynamicImportFailed />,
}

export default dashboardRoute
