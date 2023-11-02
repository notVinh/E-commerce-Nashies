import React from "react";
import { BiTrash } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const ProductCard = ({ data }) => {
  return (
    <div>
      <div className="flex justify-between items-center px-2 py-3 ">
        <input className="w-1/12" type="checkbox" />
        <NavLink className="w-6/12" to={`detail/${data.id}`}>
          {data.name}
        </NavLink>
        <div className="w-2/12">UNIT SOLD</div>
        <div className="w-2/12">IN STOCK</div>
        <div className="w-1/12">
          <BiTrash />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
