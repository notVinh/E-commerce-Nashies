import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserLayout = () => {
  return (
    <div className="text-center font-mont">
      <Header />
      <ToastContainer />
      <Outlet />
      <Footer />
    </div>
  );
};

export default UserLayout;
