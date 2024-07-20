import { createSlice } from "@reduxjs/toolkit";

const initialState = { products: [], loading: false, error: "" };
export const productSlice = createSlice({ name: "product", initialState });

export default productSlice.reducer;
