import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  description: string;
  rating: {
    rate: number;
    count: number;
  };
};

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], number[]>({
      async queryFn(ids, _queryApi, _extraOptions, baseQuery) {
        const results = await Promise.all(
          ids.map((id) => baseQuery(`/products/${id}`)),
        );

        const products = results.map((r: any) => r.data);
        return { data: products };
      },
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
