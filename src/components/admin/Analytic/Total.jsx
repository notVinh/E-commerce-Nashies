import React from "react";
import { FaCircleNotch } from "react-icons/fa";

const Total = ({ title, quantity, percent, color }) => {
  return (
    <div className="flex justify-center items-center bg-white shadow-2xl rounded-[2rem] p-8 mx-3">
      <div>
        <div className="text-[14px]">{title}</div>
        <div className="text-[25px] font-extrabold">{quantity}</div>
      </div>
      <div className="ml-9" style={{ color: color }}>
        <span className=" relative ">
          <FaCircleNotch className="text-[80px] rotate-[115deg]" />
          <span className="text-[13px] text-textColor absolute top-0 left-0 translate-x-[25px] translate-y-[30px]">
            {percent}
          </span>
        </span>
      </div>
    </div>
  );
};

export default Total;
