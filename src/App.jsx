import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Show from "./components/Show";
import Services from "./components/Services";

const App = () => {
  return (
    <div className="p-5">
      <nav className="flex gap-10 mb-5 justify-center">
        <Link to="/">Home</Link>
        <Link to="/show">Show</Link>
        <Link to="/services">Services</Link>
      </nav>
      <hr className="my-5" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/show" element={<Show />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  );
};

export default App;
