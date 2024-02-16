import React from 'react'

import { RouteObject } from 'react-router-dom'

import { HomePage } from '../pages/HomePage'
import { ErrorPage } from '../pages/ErrorPage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { SignInPage } from '../pages/SignInPage'
import { SignUpPage } from '../pages/SignUpPage'
import { ForgotPasswordPage } from '../pages/ForgotPasswordPage'
import { UserProfilePage } from '../pages/UserProfile'

import { AuthenticatedRoute } from './auth'
import { DefaultLayout } from '../layouts/DefaultLayout'

const routes: RouteObject[] = [
  {
    element: <AuthenticatedRoute Layout={<DefaultLayout />} />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/profile',
        element: <UserProfilePage />
      }
    ]
  },
  {
    path: '/sign-in',
    element: <SignInPage />
  },
  {
    path: '/sign-up',
    element: <SignUpPage />
  },
  {
    path: '/forgot-password',
    element: <ForgotPasswordPage />
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
];

export default routes;
