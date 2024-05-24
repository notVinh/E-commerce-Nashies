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
    <div className="w-full border-b-2 pb-5 mb-5 ">
      <div className="flex xl:flex-row flex-col">
        <div className="flex h-full w-full xl:flex-row flex-col items-center">
          <img
            className="h-[150px] w-[150px] object-cover"
            src={data.img}
            alt=""
          />
          <div className="mx-7 text-left flex-1 xl:w-[500px] w-full">
            <div className="flex flex-col justify-between h-full xl:mt-0 xl:border-t-0 mt-2 border-t-2 border-gray-200">
              <div>
                <div className="text-lg font-semibold text-center xl:mb-0 mb-2 w-full">
                  {data.name}
                </div>
                <div className="flex w-full xl:justify-start justify-between">
                  <div>Type</div>
                  {/* <div className="xl:mr-0 mr-5">unices</div> */}
                </div>
                <div>Color</div>
                <div>Size</div>
              </div>
              <div className="flex w-full items-center  justify-between">
                <div className="text-center xl:justify-start flex items-center justify-between w-full">
                  <div className="pr-5">Amount</div>
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
        <div className="flex xl:flex-col justify-between border-t-2 mt-4 pt-2">
          <div className="text-lg font-medium xl:order-none order-2">
            {data.total}
          </div>
          <div className="flex text-2xl justify-center items-center ">
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
