import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom'

import router from '../imports/ui/router'

Meteor.startup(() => {
  const container = document.getElementById('react-target');
  const root = createRoot(container!);
  root.render(<RouterProvider router={router} />)
});
