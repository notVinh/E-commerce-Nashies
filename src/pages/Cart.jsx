import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/cart/CartItem";
import { useEffect } from "react";
import { calculateTotal } from "../redux/slices/cartSlice";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const { cartItems, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);

  // console.log(cartItems);

  return (
    <div className="my-7 mx-12 py-7 px-16 bg-white rounded-xl">
      <div className="flex">
        <div className="flex-1 mx-4">
          <div className="text-2xl font-semibold pb-5 text-left">Bag</div>
          <div className=" max-h-screen  overflow-scroll">
            {cartItems.length > 0 ? (
              <div className="">
                {cartItems.map((item) => (
                  <CartItem key={item.id} data={item} />
                ))}
              </div>
            ) : (
              <div className="">
                The shopping cart is currently empty, please buy something and
                come back
              </div>
            )}
          </div>
        </div>

        {cartItems.length > 0 && (
          <div className="w-[365px] border-l-2 pl-12">
            <div className="text-2xl font-semibold pb-5 text-left">Summary</div>
            <div className="flex justify-between mb-2">
              <div>Subtotal</div> <span>{total}</span>
            </div>
            <div className="flex justify-between mb-2">
              <div>Estimated Delivery & Handling</div> <span>free</span>
            </div>
            <div className="flex justify-between py-4 my-3 border-y-gray-200 border-x-0 border">
              <div> Total</div> <span className="font-medium">{total}</span>
            </div>
            {userInfo ? (
              <NavLink to="/checkout">
                <div className="px-6 p-5 bg-black rounded-full text-white mb-3">
                  Checkout
                </div>
              </NavLink>
            ) : (
              <>
                <NavLink to="/checkout">
                  <div className="px-6 p-5 bg-black rounded-full text-white mb-3">
                    Guest Checkout
                  </div>
                </NavLink>
                <NavLink to={"/login"}>
                  <div className="px-6 p-5 bg-black rounded-full text-white">
                    Member Checkout
                  </div>
                </NavLink>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
