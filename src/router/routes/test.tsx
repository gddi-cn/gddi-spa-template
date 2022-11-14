import React from 'react'
import { RouteObject } from 'react-router-dom'

import { Paths } from '@shared/enums/paths'
import Lazy from '@components/Lazy'
import DynamicImportFailed from '@components/DynamicImportFailed/DynamicImportFailed'

const Test = React.lazy(() => import('@pages/Test'))

const testRoute: RouteObject = {
  path: Paths.Layout.TEST,
  element: (
    <Lazy>
      <Test />
    </Lazy>
  ),
  errorElement: <DynamicImportFailed />,
}

export default testRoute
