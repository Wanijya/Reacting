import React, { useContext } from "react";
import { UserContext } from "../context/Context";
import { useNavigate, useParams } from "react-router-dom";

const Userdetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { users } = useContext(UserContext);
  console.log(users[id]);
  return (
    <div>
      <h1 className="text-4xl font-bold text-red-400">{users[id].username}</h1>
      <h3>{users[id].city}</h3>
      <button onClick={()=> navigate(-1)} className="px-3 py-1 mt-3 bg-red-200 rounded">Go Back</button>
    </div>
  );
};

export default Userdetails;
