import React, { useState } from "react";
import CardDetail from "./CardDetail";

const Card = ({ data }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className="w-[290px] h-[465px] " onClick={onclick}>
        {data.img ? (
          <img
            className="h-[290px] w-[290px] object-cover"
            src={data.img}
            alt=""
            onClick={() => setOpenModal(true)}
          />
        ) : (
          <img
            className="h-[290px] w-[290px] object-cover"
            src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/aa4fa66b-198e-447e-a241-ff44a6dc639f/lebron-xxi-akoya-ep-basketball-shoes-4tVgfH.png"
            alt=""
          />
        )}
        <div className="flex-col text-left">
          <div className="text-orange-400">{data.version}</div>
          <div className="py-0-1">
            <div>{data.name}</div>
            <div className="text-gray-500">{data.type}</div>
            <div className="text-gray-500">{data.color}</div>
          </div>

          <div>{data.price}</div>
        </div>
      </div>
      <CardDetail
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        data={data}
      />
    </>
  );
};

export default Card;
