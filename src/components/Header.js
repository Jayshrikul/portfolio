import React, { useState, useEffect } from "react";
import "../styles/Header.css";

function Header() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <header className="header">
      <div className="logo" aria-label="Site logo">
        Jayshri Kulkarni
      </div>
      <nav className="nav" aria-label="Main navigation">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a href="#contact" className="cta-button">
          Let&apos;s Connect
        </a>
        <button
          onClick={toggleTheme}
          className="theme-toggle"
          aria-label="Toggle light/dark theme"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </nav>
    </header>
  );
}

export default Header;
