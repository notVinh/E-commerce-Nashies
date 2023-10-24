import React from "react";

const ProductDetail = () => {
  return (
    <div className=" w-full mx-4 pt-2 shadow-xl rounded-xl bg-white">
      <div className="mx-5 font-semibold">Edit Product</div>
      <nav className="flex">
        <div className="w-1/2 mx-5 mt-6">
          <div>Name</div>
          <input
            className="border-2 border-gray-300 rounded py-2 px-4 w-full my-3  "
            type="text"
          />
          <div>Brand</div>
          <input
            className="border-2 border-gray-300 rounded py-2 px-4 w-full my-3  "
            type="text"
          />
          <div>Type</div>
          <input
            className="border-2 border-gray-300 rounded py-2 px-4 w-full my-3  "
            type="text"
          />
          <div>Price</div>
          <input
            className="border-2 border-gray-300 rounded py-2 px-4 w-full my-3  "
            type="text"
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
      <div className="bg-gray-400 text-white text-center rounded-full mx-5 mt-6">
        Update Now
      </div>
    </div>
  );
};

export default ProductDetail;
