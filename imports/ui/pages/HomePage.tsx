import React from 'react';

import { CounterDemo } from '../components/CounterDemo';
import { Info } from '../components/Info';

export const HomePage = () => (
  <div className='pt-8 text-center'>
    <h1 className='text-2xl font-semibold'>
      Welcome to Yet Another Meteor Boilerplate!
    </h1>
    <CounterDemo />
    <Info />
  </div>
);
