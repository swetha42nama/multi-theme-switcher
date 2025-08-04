
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-white shadow-md z-10 flex items-center justify-between px-8">
      
      <div className="text-xl font-bold">Multi Theme Switcher</div>

      
      <nav style={{ display: "flex", gap: "2cm", marginLeft: "2cm" }}>
        <Link to="/" className="text-lg hover:underline">Home</Link>
        <Link to="/about" className="text-lg hover:underline">About</Link>
        <Link to="/contact" className="text-lg hover:underline">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;