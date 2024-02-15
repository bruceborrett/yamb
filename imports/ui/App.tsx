import React from 'react';
import { Hello } from './Hello';
import { Info } from './Info';

export const App = () => (
  <div className='pt-8 text-center'>
    <h1 className='p-8 text-2xl font-semibold'>Welcome to Meteor!</h1>
    <Hello />
    <Info />
  </div>
);
