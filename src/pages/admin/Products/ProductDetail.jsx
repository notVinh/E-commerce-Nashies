import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getAllProduct,
  updateProduct,
} from "../../../redux/slices/productSlide";

const ProductDetail = () => {
  const productData = useSelector((state) => state.product);
  const data = productData.products[0];
  console.log(productData);

  const [name, setName] = useState("vinh");
  const [brand, setBrand] = useState(data.brand);
  const [type, setType] = useState(data.type);
  const [price, setPrice] = useState(data.price);

  // console.log(name);

  const { productID } = useParams();

  const [param, setParam] = useState(productID);

  const dispatch = useDispatch();

  useEffect(() => {
    setName(data.name);

    dispatch(getAllProduct(param));
  }, [data.name, param]);

  const handleUpdate = async () => {
    try {
      const res = { name, brand, type, price, _id: data._id };
      // console.log(res);
      dispatch(updateProduct(res));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" w-full mx-4 pt-2 shadow-xl rounded-xl bg-white">
      <div className="mx-5 font-semibold">Edit Product</div>
      <nav className="flex">
        <div className="w-1/2 mx-5 mt-6">
          <div>Name</div>
          <input
            className="border-2 border-gray-300 rounded py-2 px-4 w-full my-3  "
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div>Brand</div>
          <input
            className="border-2 border-gray-300 rounded py-2 px-4 w-full my-3  "
            type="text"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
          <div>Type</div>
          <input
            className="border-2 border-gray-300 rounded py-2 px-4 w-full my-3  "
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
          <div>Price</div>
          <input
            className="border-2 border-gray-300 rounded py-2 px-4 w-full my-3  "
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <div>Status</div>
          <input
            className="border-2 border-gray-300 rounded py-2 px-4 w-full my-3  "
            type="text"
          />
        </div>
        <div className="w-1/2 flex justify-center items-center border-2 mx-5">
          <img
            className=""
            src="https://raw.githubusercontent.com/notVinh/PORTFOLIO-v2/main/public/assets/icons/favicon.png"
            alt=""
            width={100}
          />
        </div>
      </nav>
      <div
        className="bg-gray-400 text-white text-center rounded-full mx-5 mt-6"
        onClick={handleUpdate}
      >
        Update Now
      </div>
    </div>
  );
};

export default ProductDetail;
