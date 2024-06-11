import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Routing from "./utils/Routing";
import Home from "./components/Home";
import User from "./components/User";
import About from "./components/About";

const App = () => {
  return (
    <>
      <Nav />
      <Routing />
    </>
  );
};

export default App;
