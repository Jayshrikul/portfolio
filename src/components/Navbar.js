// Navbar.js
import React from "react";
import { Link } from "react-scroll";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="home" smooth={true} duration={800}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={800}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={800}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={800}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={800}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
