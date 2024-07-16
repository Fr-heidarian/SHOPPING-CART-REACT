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
  },
});
