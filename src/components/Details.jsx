import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import axios from "../utils/axios";
import Loading from "./Loading";

const Details = () => {
  const [product, setproduct] = useState(null);
  const { id } = useParams();
  console.log(id);
  const getsingleproduct = async () => {
    try {
      const { data } = await axios.get(`/products/${id}`);
      setproduct(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getsingleproduct();
  }, []);
  return product ? (
    <div className="w-[70%] h-full m-auto p-[10%] flex gap-10 items-center">
      <img
        className="h-[80%] w-[50%] object-contain"
        src={`${product.image}`}
        alt=""
      />
      <div className="content">
        <h1 className="text-4xl font-semibold">
          {product.title}
        </h1>
        <h3 className="text-zinc-500 my-5">{product.category}</h3>
        <h2 className="text-red-300 mb-3">$ {product.price}</h2>
        <p className="mb-5">
          {product.description}
        </p>
        <Link className="py-2 px-5 border rounded border-blue-200 text-blue-300 mr-5">
          Edit
        </Link>
        <Link className="py-2 px-5 border rounded border-red-200 text-red-300">
          Delete
        </Link>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Details;
