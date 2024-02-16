import React from 'react';

import { Link, useNavigate } from "react-router-dom";

import { SignUpForm } from '../forms/SignUpForm';

export const SignUpPage = () => {
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
        Create your account
      </h1>
      <div className="w-2/3 sm:w-1/3 md:w-1/5 mx-auto mb-4">
        <SignUpForm submitDone={submit} />
      </div>
      <p className="text-sm font-light text-gray-500 dark:text-gray-400 mb-2">
        Already have an account? <Link to="/sign-in" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login</Link>
      </p>
    </div>
  );
};
