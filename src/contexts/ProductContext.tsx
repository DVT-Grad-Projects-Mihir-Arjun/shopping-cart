import { createContext, useContext } from 'react';

type Product = {
    id: number;
    title: string;
    price: number;
    image: string;
    category: string;
    description: string;
};

const products: Product[] = await Promise.all(
    [19, 2, 3, 4].map(id =>
        fetch(`https://fakestoreapi.com/products/${id}`).then(response => response.json())
    )
);

const ProductContext = createContext<Product[]>([]);

export function ProductProvider({ children }: { children: React.ReactNode }) {
    return (
        <ProductContext.Provider value={products}>
            {children}
        </ProductContext.Provider>
    );
}

export const useProducts = () => useContext(ProductContext);