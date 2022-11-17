import React from 'react'
import { RouteObject } from 'react-router-dom'

import { Paths } from '@shared/enums/paths'
import DynamicImportFailed from '@components/DynamicImportFailed/DynamicImportFailed'
import LayoutPage from '@layout/LayoutPage'

const Test = React.lazy(() => import('@pages/Test'))

const testRoute: RouteObject = {
  path: Paths.Layout.TEST,
  element: (
    <LayoutPage>
      <Test />
    </LayoutPage>
  ),
  errorElement: <DynamicImportFailed />,
}

export default testRoute
