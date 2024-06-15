import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/Context";

const User = () => {
  const { users, setusers } = useContext(UserContext);
  return (
    <div>
      <h1 className="text-3xl">User List</h1>
      <div className="flex flex-col gap-5 mt-10">
        {users.map((u) => {
          return (
            <Link key={u.id} to={`/user/${u.id}`} className="p-3 bg-red-100">
              {u.username}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default User;
