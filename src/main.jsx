import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UserLayout from "./pages/layouts/UserLayout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import User from "./pages/User.jsx";
import Github from "./pages/Github.jsx";
import Login from "./pages/Login.jsx";

import store from "./redux/store.js";
import { Provider } from "react-redux";
import Register from "./pages/Register.jsx";
import Products from "./pages/Products.jsx";
import Cart from "./pages/Cart.jsx";
import Vinh from "./pages/Vinh.jsx";
import Checkout from "./pages/Checkout.jsx";
import Main from "./pages/admin/Main.jsx";
import AdminLayout from "./pages/layouts/AdminLayout.jsx";
import Analytics from "./pages/admin/Analytics.jsx";
import ProductsA from "./pages/admin/Products/ProductsA.jsx";
import ProductDetail from "./pages/admin/Products/ProductDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "user/:userId", element: <User /> },
      { path: "github", element: <Github /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "products", element: <Products /> },
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout /> },
      { path: "vinh", element: <Vinh /> },
    ],
  },
  {
    path: "/admin/",
    element: <AdminLayout />,
    children: [
      { path: "main", element: <Main /> },
      { path: "analytic", element: <Analytics /> },
      { path: "products", element: <ProductsA /> },
      { path: "products/detail", element: <ProductDetail /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
