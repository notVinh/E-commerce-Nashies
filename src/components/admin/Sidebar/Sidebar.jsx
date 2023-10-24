import React from "react";
import { BiSolidDashboard } from "react-icons/bi";
import { FaUserAlt, FaHistory } from "react-icons/fa";
import { IoAnalyticsSharp, IoSettingsSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaListCheck } from "react-icons/fa6";
import { MdReportGmailerrorred } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import SidebarItem from "./SidebarItem";
import { BsBoxSeamFill } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="flex flex-col justify-center items-start bg-white shadow-xl text-textColor rounded-xl">
      <SidebarItem
        icon={<BiSolidDashboard />}
        title={"Dashboard"}
        to={"main"}
      ></SidebarItem>
      <SidebarItem
        icon={<IoAnalyticsSharp />}
        title={"Analytics"}
        to={"analytic"}
      ></SidebarItem>
      <SidebarItem
        icon={<BsBoxSeamFill />}
        title={"Products"}
        to={"products"}
      ></SidebarItem>

      <SidebarItem icon={<FaUserAlt />} title={"Users"}></SidebarItem>
      <SidebarItem icon={<FaHistory />} title={"History"}></SidebarItem>
      <SidebarItem icon={<IoMdMail />} title={"Mail"}></SidebarItem>
      <SidebarItem icon={<FaListCheck />} title={"List"}></SidebarItem>
      <SidebarItem
        icon={<MdReportGmailerrorred />}
        title={"Report"}
        to={"/admin/report"}
      ></SidebarItem>
      <SidebarItem icon={<IoSettingsSharp />} title={"Setting"}></SidebarItem>
      <SidebarItem icon={<AiOutlinePlus />} title={"Add"}></SidebarItem>
      <SidebarItem icon={<FiLogOut />} title={"Logout"}></SidebarItem>
    </div>
  );
};

export default Sidebar;
