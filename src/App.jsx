import React, { useState } from "react";
const App = () => {

  const [val, setVal] = useState({name: "Wani", isBanned: false});

  return (
    <div className="m-5">
      <h1>name: {val.name}</h1>
      <h2>isBanned: {val.isBanned.toString()}</h2>
      <button onClick={()=>setVal({...val, isBanned: !val.isBanned})} className={`px-3 py-1 ${val.isBanned ? "bg-blue-500" : "bg-red-500"} rounded-md`}>Change kro</button>
    </div>
  );
};

export default App;
