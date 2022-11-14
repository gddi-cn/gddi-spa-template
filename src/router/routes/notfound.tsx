import { RouteObject } from 'react-router-dom'

import { Paths } from '@shared/enums/paths'
import Notfound from '@pages/Notfound'
import DynamicImportFailed from '@components/DynamicImportFailed/DynamicImportFailed'

const notfoundRoute: RouteObject = {
  path: Paths.Primary.NOTFOUND,
  element: <Notfound />,
  errorElement: <DynamicImportFailed />,
}

export default notfoundRoute
