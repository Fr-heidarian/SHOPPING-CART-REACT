import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = { products: [], loading: false, error: "" };

export const readProducts = createAsyncThunk("product/readProducts", () => {
  return fetch("https://6300a18859a8760a757d441c.mockapi.io/User")
    .then((res) => res.json())
    .catch((e) => e.message);
});

export const productSlice = createSlice({ name: "product", initialState });
export default productSlice.reducer;
