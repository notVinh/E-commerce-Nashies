import { useState } from "react";
import { AiOutlineCloseCircle, AiOutlineHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

const CardDetail = ({ isOpen, onClose, data }) => {
  const dispatch = useDispatch();
  const handleAddToCart = async () => {
    const id = data.id;
    const img = data.img;
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
    onClose();
  };
  return (
    <div
      className={`bg-black bg-opacity-30 fixed z-50 top-0 right-0 bottom-0 left-0 w-full h-full m-auto flex justify-center items-center ${
        !isOpen && "hidden"
      }`}
    >
      <div className="bg-white w-[1200px] h-[700px] flex rounded-xl justify-between">
        <div className="flex items-center">
          <div className="h-full pt-5">
            <img
              className="w-20 h-20 object-cover m-4 rounded-md"
              src={data.img1}
              alt=""
            />
            <img
              className="w-20 h-20 object-cover m-4 rounded-md"
              src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/aa4fa66b-198e-447e-a241-ff44a6dc639f/lebron-xxi-akoya-ep-basketball-shoes-4tVgfH.png"
              alt=""
            />
            <img
              className="w-20 h-20 object-cover m-4 rounded-md"
              src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/aa4fa66b-198e-447e-a241-ff44a6dc639f/lebron-xxi-akoya-ep-basketball-shoes-4tVgfH.png"
              alt=""
            />
            <img
              className="w-20 h-20 object-cover m-4 rounded-md"
              src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/aa4fa66b-198e-447e-a241-ff44a6dc639f/lebron-xxi-akoya-ep-basketball-shoes-4tVgfH.png"
              alt=""
            />
            <img
              className="w-20 h-20 object-cover m-4 rounded-md"
              src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/aa4fa66b-198e-447e-a241-ff44a6dc639f/lebron-xxi-akoya-ep-basketball-shoes-4tVgfH.png"
              alt=""
            />
            <img
              className="w-20 h-20 object-cover m-4 rounded-md"
              src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/aa4fa66b-198e-447e-a241-ff44a6dc639f/lebron-xxi-akoya-ep-basketball-shoes-4tVgfH.png"
              alt=""
            />
          </div>
          <div className="">
            <img className="w-[500px] rounded-xl" src={data.img} alt="" />
          </div>
          <div className="mx-20 py-10 h-full flex-col justify-start text-left w-[400px]">
            <div className="text-2xl font-medium">{data.name}</div>
            <div className="text-base font-medium">{data.type}</div>
            <div className="py-5">{data.price}</div>
            <div>
              <div>Select Size</div>
              <div>
                <div className="px-5 py-2 w-32 h-12 border border-gray-300 rounded text-center">
                  EU 41
                </div>
              </div>
            </div>
            <div
              className=" border-black border text-center rounded-full p-3 hover:bg-black hover:text-white cursor-pointer"
              onClick={handleAddToCart}
            >
              Add To Cart
            </div>
            <div className=" border-black border text-center rounded-full p-3 hover:bg-black hover:text-white cursor-pointer flex justify-center items-center">
              Favorite
              <span>
                <AiOutlineHeart className="ml-3" />
              </span>
            </div>
          </div>
        </div>
        <AiOutlineCloseCircle
          className=" w-9 h-9 flex text-center m-3 cursor-pointer "
          onClick={onClose}
        />
        {/* <div
          className="rounded-full border border-black w-9 h-9 flex justify-center items-center text-center m-3 cursor-pointer"
          onClick={onClose}
        ></div> */}
      </div>
    </div>
  );
};

export default CardDetail;
