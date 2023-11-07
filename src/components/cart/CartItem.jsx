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
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardArrowUp,
} from "react-icons/md";

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
    <div className="w-full border-b-2 pb-5 mb-5">
      <div className="flex">
        <div className="flex h-full">
          <img
            className="h-full w-[150px] object-cover"
            src={data.img}
            alt=""
          />
          <div className="mx-7 text-left flex-1 w-[500px]">
            <div className="flex flex-col justify-between h-full ">
              <div>
                <div className="text-lg font-semibold">{data.name}</div>
                <div>Type</div>
                <div>Color</div>
                <div>Size</div>
              </div>
              <div className="flex items-center">
                <div className="pr-5">Amount</div>
                <div className="text-center flex items-center justify-between w-full">
                  <div className="flex items-center">
                    <button>
                      <MdKeyboardArrowLeft
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
                    </button>
                    <div className="touch-none mx-2">{data.quantity}</div>
                    <button>
                      <MdKeyboardArrowRight
                        className="text-3xl cursor-pointer"
                        onClick={() => dispatch(increaseAmount(data.id))}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="text-lg font-medium">{data.total}</div>
          <div className="flex text-2xl justify-center items-center">
            <button>
              <AiOutlineHeart className="mr-4" />
            </button>
            <button>
              <FiTrash onClick={handleDeleteItem} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
