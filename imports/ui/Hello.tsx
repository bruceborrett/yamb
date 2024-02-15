import React, { useState } from 'react';

export const Hello = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div className='p-4'>
      <button className='px-3 py-2 rounded-lg border' onClick={increment}>Click Me</button>
      <p className='p-4'>You've pressed the button {counter} times.</p>
    </div>
  );
};
