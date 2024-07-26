import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import modalReducer from "./features/modal/modalSlice";
import productApi from "./features/product/productSlice-rtkQuery";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
    [productApi.reducerPath]: productApi.reducer,
  },

  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(productApi.middleware),
});

setupListeners(store.dispatch);
