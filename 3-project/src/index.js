import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function Navbar() {
  return (
    <nav>
      <img src="./react-logo.svg" alt="React Logo" width="40px" />
    </nav>
  );
}

function Header() {
  return (
    <header>
      <h1>Fun facts about React</h1>
    </header>
  );
}

function MainContent() {
  return (
    <main>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  );
}

function Footer() {
  return <footer>ReactJS v18 Tutorial - Scrimba</footer>;
}

function Page() {
  return (
    <div>
      <Navbar />
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

const root = createRoot(document.querySelector("#root"));
root.render(<Page />);
