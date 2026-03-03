import { FiPlus, FiMinus } from "react-icons/fi";
import { useCartDispatch } from '../contexts/CartContext.tsx';
import type { CartItem as CartItemType } from '../contexts/CartContext.tsx';

type Props = { item: CartItemType };

export default function CartItem({ item }: Props) {
    const dispatch = useCartDispatch();
    return (
        <div className="flex items-center gap-3 py-2 border-b">
            <img src={item.image} alt={item.title} className="h-12 w-12 object-contain" />
            <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{item.title}</p>
                <p className="text-sm text-gray-500">${item.price}</p>
            </div>
            <div className="flex items-center gap-1">
                <button className="btn btn-xs btn-ghost" onClick={() => dispatch({ type: 'DECREMENT', id: item.id })}><FiMinus size={20} /></button>
                <span className="w-5 text-center text-sm">{item.quantity}</span>
                <button className="btn btn-xs btn-ghost" onClick={() => dispatch({ type: 'INCREMENT', id: item.id })}><FiPlus size={20} /></button>
            </div>
            <button
                className="btn btn-xs btn-error btn-outline"
                onClick={() => dispatch({ type: 'REMOVE', id: item.id })}
            >✕</button>
        </div>
    );
}