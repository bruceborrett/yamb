import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

export const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="pt-12 text-center">
      <p>Something went wrong :(</p>
      <Link to="/" className="text-blue-400">Go back to home page</Link>
    </div>
  )
}
