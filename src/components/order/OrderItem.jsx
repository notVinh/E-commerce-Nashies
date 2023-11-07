import React, { useState } from "react";
import OrderDetail from "./OrderDetail";

const OrderItem = ({ data }) => {
  const [open, setOpen] = useState(false);
  //   console.log(data);

  return (
    <div className="my-9">
      <div className="flex justify-between items-center text-center ">
        <div className="w-1/3">{data.date}</div>
        <div className="w-1/3">{data.total}</div>
        <div className="w-1/3">
          <button
            className="border-2 border-gray-400 rounded-full py-1 px-3 hover:bg-gray-400 hover:text-white"
            onClick={() => setOpen(true)}
          >
            Detail
          </button>
        </div>
      </div>
      <OrderDetail isOpen={open} data={data} onClose={() => setOpen(false)} />
    </div>
  );
};

export default OrderItem;
