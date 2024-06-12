import React from "react";
import { Link, Outlet } from "react-router-dom";

const User = () => {
  return (
    <div className="w-full h-screen bg-slate-100">
      <h1 className="text-5xl">User Page</h1>
      <div className="flex flex-col w-1/2 m-auto mt-10">
        <Link
          className="p-3 bg-red-200 text-2xl mb-3 hover:bg-red-500"
          to="/user/john"
        >
          John
        </Link>
        <Link
          className="p-3 bg-red-200 text-2xl mb-3 hover:bg-red-500"
          to="/user/doe"
        >
          Doe
        </Link>
        <Link
          className="p-3 bg-red-200 text-2xl mb-3 hover:bg-red-500"
          to="/user/jane"
        >
          Jane
        </Link>
      </div>

      <hr />
      <Outlet />
    </div>
  );
};

export default User;
