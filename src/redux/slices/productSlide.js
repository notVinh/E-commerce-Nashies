import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// export const getAllProduct = createAsyncThunk("getProducts", async () => {
//   const response = await fetch("");
//   const data = response.json();
//   return data;
// });
const productApi = import.meta.env.VITE_PRODUCT_API;

export const getAllProduct = createAsyncThunk("getProducts", async (query) => {
  // console.log(query);
  return await axios.get(`${productApi}/${query}`).then((res) => res.data);
});

export const updateProduct = createAsyncThunk("updateProduct", async (data) => {
  // console.log(data._id);
  axios
    .put(`${productApi}/${data._id}`, data)
    // .then((res) => console.log(res.data))
    .catch((error) => console.log(error));
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
