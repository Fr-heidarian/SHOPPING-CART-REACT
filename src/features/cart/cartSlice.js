import { createSlice } from "@reduxjs/toolkit";

const initialState = { cartItems: [], total: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const exist = state.cartItems.find((x) => x.id === product.id);
      if (exist) {
        exist.qty += 1;
      } else {
        state.cartItems.push({ ...product, qty: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const product = action.payload;
      const exist = state.cartItems.find((x) => x.id === product.id);
      if (exist.qty === 1) {
        state.cartItems = state.cartItems.filter((x) => x.id !== product.id);
      } else {
        exist.qty -= 1;
      }
    },
    getCartTotal: (state) => {
      state.total = state.cartItems.reduce((acc, item) => acc + item.qty, 0);
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addToCart, removeFromCart, getCartTotal, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
