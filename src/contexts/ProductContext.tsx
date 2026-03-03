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
    [2, 3, 4, 19].map(id =>
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => { if (!res.ok) throw new Error(); return res.json(); })
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