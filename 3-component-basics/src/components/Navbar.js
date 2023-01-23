import React from "react";

export default function Navbar() {
  return (
    <nav className="nav">
      <img src="./react-logo.svg" alt="React Logo" className="nav-logo" />
      <ul className="nav-items">
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
