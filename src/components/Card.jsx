import React from "react";

const Card = () => {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1664455340023-214c33a9d0bd?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Amazon Basics",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      instock: true
    },
    {
      image:
        "https://images.unsplash.com/photo-1598972428564-8dbf76afc2ae?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Apple",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      instock: false
    },
    {
      image:
        "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Daily Product",
      description: "Lorem ipsum dolor sit amet consect",
      instock: true
    },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center gap-10 bg-zinc-200">
      {data.map((elem, index) => (
        <div key={index} className="w-52 bg-zinc-100 rounded-md overflow-hidden">
          <div className="w-full h-32 bg-zinc-300">
            <img className="w-full h-full object-cover" src={elem.image} alt="" />
          </div>
          <div className="w-full px-3 py-4">
            <h2 className="font-semibold">{elem.name}</h2>
            <p className="text-xs mt-3">
              {elem.description}
            </p>
            <button className={`px-4 py-1 ${elem.instock ? "bg-blue-500" : "bg-red-500"} text-xs rounded text-zinc-100 mt-3`}>{elem.instock ? "In Stock" : "Out of Stock"}</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
