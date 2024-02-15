import React from 'react';

import { Link } from 'react-router-dom';

export const NotFoundPage = () => (
  <div className='pt-8 text-center'>
    <h1 className='p-8 text-2xl font-semibold'>Page Not Found</h1>
    <Link to='/' className="text-blue-400">Go back to home page</Link>
  </div>
);
