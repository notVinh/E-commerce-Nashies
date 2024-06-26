import React, { useEffect } from "react";
import OrderItem from "../components/order/OrderItem";
import { useDispatch, useSelector } from "react-redux";
import { getOrder } from "../redux/slices/orderSlice";

const Order = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const { orders } = useSelector((state) => state.order);
  const dispatch = useDispatch();
  // console.log(orders);
  useEffect(() => {
    const query = `name=${userInfo.name}&email=${userInfo.email}`;
    // console.log(query);
    dispatch(getOrder(query));
  }, []);
  return (
    <div className="my-7 mx-12 py-7 px-16 bg-white rounded-xl flex justify-center">
      <div className="h-screen w-full ">
        <div className="flex mx-1 my-5 font-semibold text-center">
          <h2 className="w-1/3">Date</h2>
          <h2 className="w-1/3">Total</h2>
          <h2 className="w-1/3">Action</h2>
        </div>
        {orders.map((item) => (
          <OrderItem key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Order;
