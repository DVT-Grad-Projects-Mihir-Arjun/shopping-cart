import { createContext, useContext, useReducer } from 'react';

export type CartItem = {
    id: number;
    title: string;
    price: number;
    image: string;
    quantity: number;
};

type CartAction =
    | { type: 'ADD'; product: CartItem }
    | { type: 'INCREMENT'; id: number }
    | { type: 'DECREMENT'; id: number }
    | { type: 'REMOVE'; id: number };

type CartContextType = {
    cart: CartItem[];
    dispatch: React.Dispatch<CartAction>;
};

function cartReducer(state: CartItem[], action: CartAction): CartItem[] {
    switch (action.type) {
        case 'ADD':
            const exists = state.find(item => item.id === action.product.id);
            return exists
                ? state.map(item =>
                    item.id === action.product.id ? { ...item, quantity: item.quantity + 1 } : item
                )
                : [...state, { ...action.product, quantity: 1 }];
        case 'INCREMENT':
            return state.map(item =>
                item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item
            );
        case 'DECREMENT':
            return state.map(item =>
                item.id === action.id ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
            );
        case 'REMOVE':
            return state.filter(item => item.id !== action.id);
        default:
            return state;
    }
}

const CartContext = createContext<CartContextType>({ cart: [], dispatch: () => {} });

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cart, dispatch] = useReducer(cartReducer, []);
    return (
        <CartContext value={{ cart, dispatch }}>
            {children}
        </CartContext>
    );
}

export const useCart = () => useContext(CartContext).cart;
export const useCartDispatch = () => useContext(CartContext).dispatch;