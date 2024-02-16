import React from 'react'

import { ForgotPasswordForm } from '../forms/ForgotPasswordForm'
import { Link, useNavigate } from 'react-router-dom'

export const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full pt-16 text-center">
      <img
        className="w-1/3 md:w-1/5 mx-auto mb-4"
        src="/logo.png"
        alt="Yet Another Meteor Boilerplate"
      />
      <h1 className="mb-4 text-center">
        Forgotten your password?
      </h1>
      <div className="w-2/3 sm:w-1/3 md:w-1/5 mx-auto mb-4">
        <p className="mb-8">
          Enter your email address below and we will send you a password reset link
        </p>
        <ForgotPasswordForm submitDone={() => navigate('/sign-in')} />
      </div>
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        <Link to="/sign-in" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Go to Sign In</Link>
      </p>
    </div>
  )
}
