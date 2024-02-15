import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { RouterProvider } from 'react-router-dom'

import router from '../imports/ui/router'

Meteor.startup(() => {
  const container = document.getElementById('react-target')
  render(<RouterProvider router={router} />, container)
});
