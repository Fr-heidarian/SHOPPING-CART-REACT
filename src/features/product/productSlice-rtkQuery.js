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

    createProduct: builder.mutation({
      query: (product) => ({
        url: PRODUCTS_URL,
        method: "POST",
        body: product,
      }),
    }),

  }),
});

export const {
  useReadProductsQuery,
  useReadProductQuery,
  useCreateProductMutation,
} = productApi;
export default productApi;
