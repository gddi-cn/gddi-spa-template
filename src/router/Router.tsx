import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { loginRoute, notfoundRoute, layoutRoute, } from './routes'
import React from 'react'
import PrimaryLoading from '@components/PrimaryLoading'

const router = createBrowserRouter([
  layoutRoute,
  loginRoute,
  notfoundRoute, // Keep this route be the last of this array.
])

const Router: React.FC = () => {
  return (
    <React.Suspense fallback={<PrimaryLoading />}>
      <RouterProvider router={router} />
    </React.Suspense>
  )
}

export default Router
