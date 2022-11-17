import React from 'react'
import { RouteObject } from 'react-router-dom'

import { Paths } from '@shared/enums/paths'
import DynamicImportFailed from '@components/DynamicImportFailed/DynamicImportFailed'

const Login = React.lazy(() => import('@pages/Login'))

const loginRoute: RouteObject = {
  path: Paths.Primary.LOGIN,
  element: (
    <Login />
  ),
  errorElement: <DynamicImportFailed />,
}

export default loginRoute