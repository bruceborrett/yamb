import React from 'react';

import { useUser } from 'meteor/mdg:react-meteor-accounts';

export const UserProfilePage = () => {
  const user = useUser();

  return (
    <div className="px-5">
      <h1 className="text-2xl font-bold pb-4">User Profile</h1>
      <hr />
      <p className="font-sm py-4"><b>User ID: </b>{user? user._id : 'Loading...'}</p>
      <p className="font-sm pb-4"><b>Email: </b>{user && user.emails ? user.emails[0].address : 'Loading...'}</p>
    </div>
  );
}
