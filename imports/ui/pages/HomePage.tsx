import React from 'react';
import { Hello } from '../components/Hello';
import { Info } from '../components/Info';

export const HomePage = () => (
  <div className='pt-8 text-center'>
    <h1 className='p-8 text-2xl font-semibold'>Welcome to Meteor!</h1>
    <Hello />
    <Info />
  </div>
);
