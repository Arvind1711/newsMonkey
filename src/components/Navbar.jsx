import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="Navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>

      <div className="search-container">
      <input type="text" placeholder="search..." ></input>
      <button>Search</button>
      </div>
    </div>
  );
}
