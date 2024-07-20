import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = { products: [], loading: false, error: "" };

export const readProducts = createAsyncThunk("product/readProducts", () => {
  return fetch("https://6300a18859a8760a757d441c.mockapi.io/User")
    .then((res) => res.json())
    .catch((e) => e.message);
});

export const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(readProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(readProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(readProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.products = [];
    });
  },
});
export default productSlice.reducer;
