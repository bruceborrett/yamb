import React from 'react';

import { Link, useNavigate } from "react-router-dom";
import { SignInForm } from '../forms/SignInForm';

export const SignInPage = () => {
  const navigate = useNavigate();

  const submit = () => {
    navigate('/');
  };

  return (
    <div className="w-full pt-16 text-center">
      <img
        className="w-1/3 md:w-1/5 mx-auto mb-4"
        src="/logo.png"
        alt="Yet Another Meteor Boilerplate"
      />
      <h1 className="mb-4 text-center">
        Sign In
      </h1>
      <div className="w-2/3 sm:w-1/3 md:w-1/5 mx-auto mb-4">
        <SignInForm submitDone={submit} />
      </div>
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Don't have an account? <Link to="/sign-up" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Create one now</Link>
      </p>
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Forgot Your password? <Link to="/forgot-password" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Reset it here</Link>
      </p>
    </div>
  );
};
