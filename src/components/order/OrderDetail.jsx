import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const OrderDetail = ({ isOpen, data, onClose }) => {
  return (
    <div
      className={`bg-black bg-opacity-30 fixed z-50 top-0 right-0 bottom-0 left-0 w-full h-full m-auto flex justify-center items-center ${
        !isOpen && "hidden"
      }`}
    >
      <div className="bg-white w-[500px] h-[500px]  rounded-xl">
        <div className="w-full h-full flex flex-col justify-between p-3">
          <div className="flex justify-end h-1/12">
            <button className="text-3xl text-gray-500" onClick={onClose}>
              <AiOutlineCloseCircle />
            </button>
          </div>
          <div className="flex-1">
            {data.orderItems.map((item) => (
              <div key={item.id}>
                <div className="flex items-center justify-between w-full my-3">
                  <img
                    className="w-[100px] h-[100px] object-cover"
                    src={item.img}
                    alt=""
                  />

                  <h2>{item.name}</h2>
                  <h3>x{item.quantity}</h3>
                  <h3>{item.total}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between h-1/6 ">
            <div className="text-left">Total</div>
            <div>{data.total}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
