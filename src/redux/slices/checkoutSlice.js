import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const orderApi = import.meta.env.VITE_ORDER_API;

export const addOrder = createAsyncThunk("addOrder", async (data) => {
  // console.log(data);
  const res = await fetch(`${orderApi}/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  try {
    const result = await res.json();
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const checkoutSlice = createSlice({
  name: "addOrder",
  initialState: {
    orders: [],
    loading: false,
    error: null,
    isSuccess: "",
  },
  extraReducers: (builder) => {
    builder.addCase(addOrder.pending, (state) => {
      state.loading = true;
      state.error = "";
    });

    builder.addCase(addOrder.fulfilled, (state, action) => {
      state.loading = false;
      state.orders.push(action.payload);
    });
    builder.addCase(addOrder.rejected, (state, action) => {
      state.loading = false;
      state.orders = action.payload;
      state.error = action.error.message;
    });
  },
});

export default checkoutSlice.reducer;
