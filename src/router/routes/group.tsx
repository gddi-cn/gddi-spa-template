import React from 'react'
import { RouteObject } from 'react-router-dom'

import DynamicImportFailed from '@components/DynamicImportFailed/DynamicImportFailed'
import LayoutPage from '@layout/LayoutPage'
import { Paths } from '@shared/enums/paths'

const Group = React.lazy(() => import('@pages/Group'))

const userRoute: RouteObject = {
  path: Paths.Layout.GROUP,
  element: (
    <LayoutPage>
      <Group />
    </LayoutPage>
  ),
  errorElement: <DynamicImportFailed />,
}

export default userRoute
