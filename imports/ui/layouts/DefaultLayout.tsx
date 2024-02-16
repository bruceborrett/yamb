import React from "react";

import { Outlet } from "react-router-dom";
import { Nav } from "../components/Nav";

export const DefaultLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-grow p-4">
        <Outlet />
      </main>
      <footer className="p-4">
        <p>&copy; 2021 Yet Another Meteor Boilerplate</p>
      </footer>
    </div>
  );
}
