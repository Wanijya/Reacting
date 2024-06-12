import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const UserDetail = () => {

    const {name} = useParams();

    const navigate = useNavigate();

    const GoBackHandler = ()=>{
        navigate(-1)
    }

  return (
    <div className="bg-slate-100 w-full h-screen">
      <h1 className="text-5xl">User Detail</h1>
      <div className="flex items-center flex-col mt-10">
        <h2 className="text-3xl">hii! {name}</h2>
        <button onClick={GoBackHandler} className="mt-5 text-white px-3 py-2 rounded-md bg-red-300">Go back</button>
      </div>
    </div>
  );
};

export default UserDetail;
