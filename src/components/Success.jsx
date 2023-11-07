import React from "react";
import { NavLink } from "react-router-dom";

const Success = ({ isOpen, isLogin }) => {
  return (
    <div
      className={`bg-black bg-opacity-30 fixed z-50 top-0 right-0 bottom-0 left-0 w-full h-full m-auto flex justify-center items-center ${
        !isOpen && "hidden"
      }`}
    >
      <div className="bg-white w-[600px] h-[600px] rounded-xl flex-col items-center justify-center">
        <div className="w-full flex justify-center items-center">
          <div className="rounded-full w-[200px] h-[200px] flex justify-center items-center text-7xl mt-5 mb-3 text-green-600 bg-green-50">
            ✓
          </div>
        </div>
        <h1 className="text-green-600 font-extrabold text-4xl">Success</h1>
        <p className="py-5">
          Your order will be sent to you within the next few days
        </p>
        <div className="flex flex-col items-center justify-between">
          <button className="my-5">
            <NavLink
              to={"/"}
              className="py-3 px-10 rounded-full bg-green-300 text-white"
            >
              Back to home
            </NavLink>
          </button>
          {isLogin && (
            <button className="my-5">
              <NavLink
                to={"/order"}
                className="py-3 px-12 rounded-full bg-green-300 text-white"
              >
                Check Order
              </NavLink>
            </button>
          )}
          <button className="my-5">
            <NavLink
              to={"/products"}
              className="py-3 px-5 rounded-full bg-green-300 text-white"
            >
              Continue shopping
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;
