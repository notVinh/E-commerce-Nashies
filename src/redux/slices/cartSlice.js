import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existId = action.payload.id;

      if (state.cartItems.every((item) => item.id !== existId)) {
        state.cartItems.push(action.payload);
        state.amount = state.amount + 1;
      } else {
        const cartItem = state.cartItems.find((item) => item.id === existId);
        cartItem.quantity = cartItem.quantity + 1;
        state.amount = state.amount + 1;
      }
    },
    increaseAmount: (state, action) => {
      const itemId = action.payload;
      const cartItem = state.cartItems.find((item) => item.id === itemId);

      cartItem.quantity = cartItem.quantity + 1;
      state.amount = state.amount + 1;
    },
    decreaseAmount: (state, action) => {
      const itemId = action.payload;
      const cartItem = state.cartItems.find((item) => item.id === itemId);

      cartItem.quantity = cartItem.quantity - 1;
      state.amount = state.amount - 1;
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      const cartItem = state.cartItems.find((item) => item.id === itemId);
      state.amount = state.amount - cartItem.quantity;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    calculateTotalPerItem: (state, action) => {
      const itemId = action.payload;
      const cartItem = state.cartItems.find((item) => item.id === itemId);
      cartItem.total = cartItem.price * cartItem.quantity;
    },

    calculateTotal: (state, action) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.quantity;
        total += item.quantity * item.price;
      });
      state.amount = amount;
      state.total = total;
    },

    clearCart: (state, action) => {
      (state.cartItems = []), (state.amount = 0), (state.total = 0);
    },
  },
});

export default cartSlice.reducer;
export const {
  addToCart,
  removeItem,
  increaseAmount,
  decreaseAmount,
  totalItem,
  calculateTotalPerItem,
  calculateTotal,
  clearCart,
} = cartSlice.actions;
