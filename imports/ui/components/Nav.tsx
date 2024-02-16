import React from "react";

import { Meteor } from "meteor/meteor";
import { Link } from "react-router-dom";
import { Button } from "./Button";

export const Nav = () => {
  return (
    <nav className="flex justify-between py-4 px-8">

      <img src="/logo.png" alt="Meteor" className="w-40 h-auto" />

      <ul className="flex space-x-4 pt-3">
        <li>
          <Link to="/">
            <Button context="link">Home</Button>
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <Button context="link">Profile</Button>
          </Link>
        </li>
        <li>
          <Button context="link" onClick={Meteor.logout}>Sign Out</Button>
        </li>
      </ul>
    </nav>
  );
}
