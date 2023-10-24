import { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FiTrash } from "react-icons/fi";
import { useDispatch } from "react-redux";
import {
  calculateTotalPerItem,
  decreaseAmount,
  increaseAmount,
  removeItem,
} from "../../redux/slices/cartSlice";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const CartItem = ({ data }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotalPerItem(data.id));
  }, [data]);

  const handleDeleteItem = async () => {
    const id = data.id;
    const res = await removeItem(id);
    dispatch(res);

    // or
    // dispatch(removeItem(id));
  };

  return (
    <div className="w-full border-b-2 pb-4">
      <div className="flex">
        <img
          className="h-[150px] w-[150px] object-cover"
          src={data.img}
          alt=""
        />
        <div className="mx-7 text-left flex-1">
          <div className="flex justify-between mb-7">
            <div>
              <div className="text-lg font-semibold">{data.name}</div>
              <div>Type</div>
              <div>Color</div>
              <div className="flex items-center justify-between flex-1">
                <div className="">Size</div>
                <div className="flex items-center">
                  <div className="pr-5">Amount</div>
                  <div className="text-center flex items-center">
                    <div className="touch-none  mr-2">{data.quantity}</div>
                    <div>
                      <MdKeyboardArrowUp
                        className="text-3xl cursor-pointer"
                        onClick={() => dispatch(increaseAmount(data.id))}
                      />

                      <MdKeyboardArrowDown
                        className="text-3xl cursor-pointer"
                        onClick={() => {
                          if (data.quantity === 1) {
                            dispatch(removeItem(data.id));
                            return;
                          } else {
                            dispatch(decreaseAmount(data.id));
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-lg font-medium">{data.total}</div>
          </div>
          <div className="flex text-2xl">
            <AiOutlineHeart className="mr-4" />
            <FiTrash onClick={handleDeleteItem} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
