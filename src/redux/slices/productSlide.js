import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// export const getAllProduct = createAsyncThunk("getProducts", async () => {
//   const response = await fetch("https://nashiesapi.vercel.app/api/sneakers");
//   const data = response.json();
//   return data;
// });

export const getAllProduct = createAsyncThunk("getProducts", async (query) => {
  return axios
    .get(`https://nashiesapi.vercel.app/api/sneakers${query}`)
    .then((res) => res.data);
});

export const produceSlide = createSlice({
  name: "getProduct",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProduct.pending, (state) => {
      state.loading = false;
    });

    builder.addCase(getAllProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.error = "";
    });
    builder.addCase(getAllProduct.rejected, (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action.error.message;
    });
  },
});

export default produceSlide.reducer;
