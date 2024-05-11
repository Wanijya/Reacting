import React from "react";

const Card = () => {
  const data = [
    {
      name: "Mahiya Ve",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, consequuntur!",
    },
    {
      name: "Junoon",
      description:
        "Maecenas adipiscing elit non proident dolor in eu fugiat null a ante",
    },
  ];

  const handleClickDownload = ()=>{alert("chal rha hai")};

  return (
    <div className="w-full h-screen bg-zinc-300 flex flex-col gap-4 items-center justify-center">
      {data.map((elem, index) => (
        <div key={index} className="w-80 px-3 py-2 bg-zinc-100 rounded">
          <h3 className="font-semibold text-xl">{elem.name}</h3>
          <p className="text-xs mt-2">
            {elem.description}
          </p>
          <button onClick={handleClickDownload} className="px-2 py-1 bg-blue-400 text-xs font-semibold text-zinc-100 mt-4 rounded">
            Download Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default Card;
