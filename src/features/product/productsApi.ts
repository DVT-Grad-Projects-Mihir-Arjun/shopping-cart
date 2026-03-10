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
      queryFn: async (ids) => {
        const products = await Promise.all(
          ids.map((id) =>
            fetch(`https://fakestoreapi.com/products/${id}`).then((res) =>
              res.json(),
            ),
          ),
        );
        return { data: products };
      },
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
