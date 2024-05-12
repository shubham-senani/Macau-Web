import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivacyPolicy from "./components/PrivacyPolicy.jsx";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </div>
  );
};

export default App;
