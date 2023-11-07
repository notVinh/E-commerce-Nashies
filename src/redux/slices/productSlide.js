import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// export const getAllProduct = createAsyncThunk("getProducts", async () => {
//   const response = await fetch("");
//   const data = response.json();
//   return data;
// });
const productApi = import.meta.env.VITE_PRODUCT_API;

export const getAllProduct = createAsyncThunk("getProducts", async () => {
  // console.log(query);
  return await axios.get(`${productApi}`).then((res) => res.data);
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
    filterProducts: [],
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
      state.filterProducts = [...state.products];
      state.error = "";
    });
    builder.addCase(getAllProduct.rejected, (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action.error.message;
    });
  },
  reducers: {
    filterItem: (state, action) => {
      // console.log(action.payload);

      if (action.payload.filterName === "all") {
        state.filterProducts = [...state.products];

        if (action.payload.filterType) {
          const filtered = state.filterProducts.filter((item) => {
            if (action.payload.filterType) {
              return item.type === action.payload.filterType;
            }
          });
          state.filterProducts = filtered;
        } else {
          state.filterProducts = [...state.products];
        }
      } else {
        const filtered = state.filterProducts.filter((item) => {
          if (action.payload.filterType) {
            return item.type === action.payload.filterType;
          }
          return item.name
            .toLowerCase()
            .includes(action.payload.filterName.toLowerCase());
        });
        state.filterProducts = filtered;
      }

      if (action.payload.searchText) {
        const searchItems = state.filterProducts.filter((item) =>
          item.name
            .toLowerCase()
            .includes(action.payload.searchText.toLowerCase())
        );
        state.filterProducts = searchItems;
      }

      // if (action.payload.pageNum) {
      //   // console.log(action.payload.pageNum);

      //   const filter = state.filterProducts.filter((item) => {
      //     //   let pageNum = action.payload.pageNum;
      //     // let limit = 2;
      //     // let totalPages = Math.ceil(state.filterProducts.length / limit);
      //     return item.id < 3;
      //   });
      //   state.filterProducts = filter;
      // }
    },
  },

  // pagination: (state,action) => {
  //   let pageNum = 1;
  //   let limit = 20;
  //   let offset = 0;
  //   let totalPages = Math.ceil(state.filterProducts.length / limit);
  //   let currentPage = 1;

  //   function getNextPage() {
  //     if (currentPage < totalPages) {
  //       currentPage++;
  //       offset += limit;
  //       return { ...state, offset };
  //     }
  //   }

  //   function getPrevPage() {
  //     if (currentPage > 1) {
  //       currentPage--;
  //       offset -= limit;
  //       return { ...state, offset };
  //     }
  //   }

  //   function setCurrentPage(pageNum) {
  //     if (pageNum <= totalPages && pageNum >= 1) {
  //       currentPage = pageNum;
  //       offset = ((pageNum - 1) * limit) % state.products.length;
  //       return { ...state, offset };
  //       }
  //   }

  //   return {
  //     nextPage: getNextPage(),
  //     prevPage: getPrevPage(),
  //     setPage: setCurrentPage,
  //   };
  // },
});

export default produceSlide.reducer;
export const { filterItem, pagination } = produceSlide.actions;
