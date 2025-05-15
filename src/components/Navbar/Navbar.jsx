import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="https://i.ibb.co/d0NqcBhR/LOGO1-3.png" alt="" />
        <h2>SAGE BUS NAVIGATOR 2.0</h2>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        ☰
      </div>
      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
        {/* <Link to="/" onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <Link to="/busdetails" onClick={() => setIsOpen(false)}>
          Bus Details
        </Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
