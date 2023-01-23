import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const page = (
  <div>
    <img src="./react-logo.svg" alt="React Logo" width="40px" />
    <h1>Fun facts about React</h1>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100K stars on GitHub</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
  </div>
);

const root = createRoot(document.querySelector("#root"));
root.render(page);
