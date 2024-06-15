import axios from "axios";
import React, { useEffect, useState } from "react";

const Show = () => {
  const [products, setproducts] = useState([]);

  const getproducts = () => {
    const api = "https://fakestoreapi.com/products";

    axios
      .get(api)
      .then((products) => {
        // console.log(products);
        setproducts(products.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getproducts();
  }, []);

  return (
    <>
      <button
        onClick={getproducts}
        className="px-5 py-2 bg-red-300 rounded-md mb-5"
      >
        Call products api
      </button>
      <hr />
      <ul>
        {products.length > 0 ? (
          products.map((p) => (
            <li key={p.id} className="p-5 bg-red-200 rounded-md mt-5">
              {p.title}
            </li>
          ))
        ) : (
          <h1 className="mt-5">Loading...</h1>
        )}
      </ul>
    </>
  );
};

export default Show;
