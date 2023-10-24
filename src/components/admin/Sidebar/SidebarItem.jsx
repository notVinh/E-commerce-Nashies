import React from "react";
import { NavLink } from "react-router-dom";

const SidebarItem = ({ icon, title, to }) => {
  return (
    <NavLink
      to={to}
      className="flex justify-start items-center px-7 py-4 text-textColors w-full  focus:bg-gray-400 focus:text-white transition-all"
    >
      <span className="text-[22px]">{icon}</span>
      <span className="ml-4 text-[13px] font-semibold">{title}</span>
    </NavLink>
  );
};

export default SidebarItem;
