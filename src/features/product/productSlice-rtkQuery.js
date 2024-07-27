import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, PRODUCTS_URL } from "../../api/constants";

const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    readProducts: builder.query({
      query: (searchParam) => `${PRODUCTS_URL}?name=${searchParam}`,
    }),

    readProduct: builder.query({
      query: (id) => `${PRODUCTS_URL}/${id}`,
    }),
  }),
});

export const { useReadProductsQuery, useReadProductQuery } = productApi;
export default productApi;
