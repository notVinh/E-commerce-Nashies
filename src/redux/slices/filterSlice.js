import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterItem: [],
  isLoading: true,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    searchItem: (state, action) => {
      console.log(action.payload);
      const search = action.payload.filter((item) => {
        item.name.toLowerCase().includes("tro");
      });
      console.log(search);
      state.filterItem = state.filterItem.push(search);
      console.log(state.filterItem);
    },
  },
});
export default filterSlice.reducer;
export const { searchItem } = filterSlice.actions;
