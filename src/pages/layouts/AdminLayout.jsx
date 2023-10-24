import React from "react";
import Header from "../../components/admin/Header";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar/Sidebar";
import StatusBar from "../../components/admin/StatusBar/StatusBar";

const AdminLayout = () => {
  return (
    <div className="bg-slate-300">
      <div className="px-6 py-3 font-poppins bg-slate-100">
        <Header />
        <div className="flex justify-between">
          <Sidebar />
          <Outlet />
          <StatusBar />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
