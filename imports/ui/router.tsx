import React from 'react'

import { createBrowserRouter } from 'react-router-dom'

import { HomePage } from './pages/HomePage'
import { ErrorPage } from './pages/ErrorPage'
import { NotFoundPage } from './pages/NotFoundPage'

export default createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
])
