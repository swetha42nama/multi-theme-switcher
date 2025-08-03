
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => (
  <div className="w-64 bg-gray-800 text-white h-screen p-6 fixed">
    <h2 className="text-2xl font-bold mb-6">Sidebar</h2>
    <nav className="flex flex-col gap-4 text-lg">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  </div>
);

export default Sidebar;