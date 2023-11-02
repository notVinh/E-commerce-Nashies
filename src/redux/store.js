import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import { apiSlice } from "./slices/apiSlice";
import cartReducer from "./slices/cartSlice";
import getProduct from "./slices/productSlide";

// <------- Dùng redux-presist để lưu dữ liệu vào localStorage ------>
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";
import getOrder from "./slices/orderSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

const store = configureStore({
  reducer: {
    order: getOrder,
    product: getProduct,
    // cart: cartReducer,
    cart: persistedReducer,
    auth: authReducer,
    [apiSlice.reducerPatch]: apiSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiSlice.middleware),

  devTools: true,
});

export default store;
export let persistor = persistStore(store);
