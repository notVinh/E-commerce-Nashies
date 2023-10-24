import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import { apiSlice } from "./slices/apiSlice";
import cartReducer from "./slices/cartSlice";
import getProduct from "./slices/productSlide";

const store = configureStore({
  reducer: {
    product: getProduct,
    cart: cartReducer,
    auth: authReducer,
    [apiSlice.reducerPatch]: apiSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),

  devTools: true,
});

export default store;
