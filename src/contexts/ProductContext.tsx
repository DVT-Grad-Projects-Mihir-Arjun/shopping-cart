import { createContext } from 'react';

export type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
};

export const ProductContext = createContext<Product[]>([]);