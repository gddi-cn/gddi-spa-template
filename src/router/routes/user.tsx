import React from 'react'
import { RouteObject } from 'react-router-dom'

import DynamicImportFailed from '@components/DynamicImportFailed/DynamicImportFailed'
import LayoutPage from '@layout/LayoutPage'
import { Paths } from '@shared/enums/paths'

const User = React.lazy(() => import('@pages/User'))

const userRoute: RouteObject = {
  path: Paths.Layout.USER,
  element: (
    <LayoutPage>
      <User />
    </LayoutPage>
  ),
  errorElement: <DynamicImportFailed />,
}

export default userRoute
