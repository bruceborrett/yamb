import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { useUser, useLoggingIn } from 'meteor/mdg:react-meteor-accounts';
import { Roles } from 'meteor/alanning:roles';

type Props = {
  Layout: React.ReactElement
  allowedRoles?: string[]
}

export const AuthenticatedRoute = (props: Props) => {
  const user = useUser();
  const loggingIn = useLoggingIn();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loggingIn && !user) {
      return navigate('/sign-in');
    }

    if (!loggingIn && user &&
      props.allowedRoles && !Roles.userIsInRole(user._id, props.allowedRoles)
    ) {
      return navigate('/');
    }
  });

  return (
    <>
      {(!loggingIn
        && user
        && (!props.allowedRoles || Roles.userIsInRole(user._id, props.allowedRoles)))
        && props.Layout
      }
    </>
  );
}
