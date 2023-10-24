import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../redux/slices/productSlide";

const Vinh = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.product;
  });
  useEffect(() => {
    dispatch(getAllProduct(data));
  }, []);

  console.log(data.products);
  return <div>Vinh</div>;
};

export default Vinh;
