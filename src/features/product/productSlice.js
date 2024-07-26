import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL, PRODUCTS_URL } from "../../api/constants";

const initialState = { products: [], loading: false, error: "" };

export const readProducts = createAsyncThunk(
  "product/readProducts",
  async (searchParam, { rejectWithValue }) => {
    try {
      const res = await fetch(
        `${BASE_URL}/${PRODUCTS_URL}?name=${searchParam ?? ""}`
      );
      if (res.status === 404) {
        return rejectWithValue("Not Found");
      } else {
        return await res.json();
      }
    } catch (e) {
      return e.message;
    }
  }
);

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
