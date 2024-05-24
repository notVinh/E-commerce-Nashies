import React, { useState } from "react";
import CardDetail from "./CardDetail";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

const Card = ({ data }) => {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const handleAddToCart = async () => {
    const id = data.id;
    const img = data.image;
    const name = data.name;
    const price = data.price;
    const quantity = 1;
    const totalPerItem = 0;
    const res = await addToCart({
      img,
      name,
      price,
      id,
      quantity,
      totalPerItem,
    });
    dispatch(res);
  };
  return (
    <>
      <div
        className="xl:m-6 xl:p-0 p-5 m-3 bg-white rounded-lg"
        onClick={onclick}
      >
        <div className="relative group ">
          {data.image ? (
            <img
              className="h-[290px] w-[290px] object-cover"
              src={data.image}
              alt=""
            />
          ) : (
            <img
              className="h-[290px] w-[290px] object-cover"
              src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/aa4fa66b-198e-447e-a241-ff44a6dc639f/lebron-xxi-akoya-ep-basketball-shoes-4tVgfH.png"
              alt=""
            />
          )}
          <div className="absolute group-hover:flex justify-center flex-col items-center hidden top-0 text-center bg-[#adadad] w-full h-full ">
            <button
              className="cursor-pointer bg-white px-5 py-2 rounded-full mb-3"
              onClick={() => setOpenModal(true)}
            >
              Detail
            </button>
            <button
              className="cursor-pointer bg-white px-5 py-2 rounded-full mb-3"
              onClick={handleAddToCart}
            >
              Add to cart
            </button>
          </div>
        </div>
        <div className="flex-col text-left">
          <div className="text-orange-400">{data.version}</div>
          <div className="py-0-1">
            <div>{data.name}</div>
            <div className="text-gray-500">{data.gentle}</div>
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
