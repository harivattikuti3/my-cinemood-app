import React from "react";
import "./Navbar.css";

const Navbar = ({ onThemeToggle, darkMode, onSearchChange, onSignIn }) => {
  return (
    <nav className="navbar">
      <h1 className="logo">Cinemood</h1>
      <input
        type="text"
        className="search-input"
        placeholder="Search movies..."
        onChange={onSearchChange}
      />
      <div className="nav-actions">
        <button onClick={onThemeToggle} className="theme-btn">
          {darkMode ? "☀️" : "🌙"}
        </button>
        <button onClick={onSignIn} className="signin-btn">
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;