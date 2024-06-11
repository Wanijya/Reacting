import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex gap-10 justify-center w-full p-5 font-semibold">
      <NavLink
        style={(e) => {
          return {
            color: e.isActive ? "tomato" : "",
            fontWeight: e.isActive? "bold" : "",
          };
        }}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        style={(e) => {
          return {
            color: e.isActive ? "tomato" : "",
            fontWeight: e.isActive? "bold" : "",
          };
        }}
        to="/user"
      >
        User
      </NavLink>
      <NavLink
        style={(e) => {
          return {
            color: e.isActive ? "tomato" : "",
            fontWeight: e.isActive? "bold" : "",
          };
        }}
        to="/about"
      >
        About
      </NavLink>
    </nav>
  );
};

export default Nav;
