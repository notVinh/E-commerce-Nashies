import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import ChatBot from "../../components/ChatBot";

// alway on top when navigate page
export const AlwayOnTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const UserLayout = () => {
  return (
    <div className="text-center font-mont bg-gray-100">
      <Header />
      <AlwayOnTop />
      <ToastContainer />
      <Outlet />
      <Footer />
      <ChatBot />
    </div>
  );
};

export default UserLayout;
