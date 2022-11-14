import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { loginRoute, notfoundRoute, layoutRoute, } from './routes'
import React from 'react'

const router = createBrowserRouter([
  layoutRoute,
  loginRoute,
  notfoundRoute, // Keep this route be the last of this array.
])

const Router: React.FC = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default Router
