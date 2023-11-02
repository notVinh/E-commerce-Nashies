import React, { useEffect, useState } from "react";
import ProductCard from "../../../components/admin/Product/ProductCard";
import { BiTrash } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../../../redux/slices/productSlide";

const ProductsA = () => {
  const [param, setParam] = useState("");
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.product;
  });
  useEffect(() => {
    dispatch(getAllProduct(param));
  }, [param]);

  return (
    <div className=" w-full mx-4 pt-2 shadow-xl rounded-xl bg-white">
      <nav className="">
        <div className="flex justify-between items-center bg-slate-300 p-2">
          <div className="w-1/12" type=""></div>
          <div className="w-6/12">PRODUCT NAME</div>
          <div className="w-2/12">UNIT SOLD</div>
          <div className="w-2/12">IN STOCK</div>
          <div className="w-1/12">
            <BiTrash />
          </div>
        </div>
      </nav>
      {data.products.map((item) => (
        <ProductCard key={item.id} data={item} />
      ))}
    </div>
  );
};

export default ProductsA;
