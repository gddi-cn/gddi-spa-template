import React from 'react'
import { RouteObject } from 'react-router-dom'

import { Paths } from '@shared/enums/paths'
import DynamicImportFailed from '@components/DynamicImportFailed/DynamicImportFailed'
import PrimaryLoading from '@components/PrimaryLoading'

const Login = React.lazy(() => import('@pages/Login'))

const loginRoute: RouteObject = {
  path: Paths.Primary.LOGIN,
  element: (
    <React.Suspense fallback={<PrimaryLoading />}>
      <Login />
    </React.Suspense>
  ),
  errorElement: <DynamicImportFailed />,
}

export default loginRoute