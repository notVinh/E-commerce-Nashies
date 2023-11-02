import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { data } from "autoprefixer";
import axios from "axios";

const orderApi = import.meta.env.VITE_ORDER_API;

export const getOrder = createAsyncThunk("getOrder", async (query) => {
  // console.log(query);
  return await axios.get(`${orderApi}/search?${query}`).then((res) => res.data);
});

export const orderSlice = createSlice({
  name: "getOrder",
  initialState: {
    orders: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getOrder.pending, (state) => {
      state.loading = false;
    });

    builder.addCase(getOrder.fulfilled, (state, action) => {
      state.loading = false;
      state.orders = action.payload;
      state.error = "";
    });
    builder.addCase(getOrder.rejected, (state, action) => {
      state.loading = false;
      state.orders = [];
      state.error = action.error.message;
    });
  },
});

export default orderSlice.reducer;
