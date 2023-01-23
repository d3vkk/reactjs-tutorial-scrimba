import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

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
