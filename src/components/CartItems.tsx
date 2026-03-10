import { FiPlus, FiMinus } from "react-icons/fi";
import type { CartItem as CartItemType } from "../types/cartTypes.ts";
import { RxCross2 } from "react-icons/rx";
import { increment, decrement, remove } from "../slices/cartSlice.ts";
import { useDispatch } from "react-redux";

type Props = { item: CartItemType };

export default function CartItem({ item }: Props) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-3 py-2 border-b">
      <img
        src={item.image}
        alt={item.title}
        className="h-12 w-12 object-contain"
      />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium truncate">{item.title}</p>
        <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
      </div>
      <div className="flex items-center gap-1">
        <button
          className="btn btn-xs btn-ghost"
          onClick={() => dispatch(decrement(item.id))}
        >
          <FiMinus size={20} />
        </button>
        <span className="w-5 text-center text-sm">{item.quantity}</span>
        <button
          className="btn btn-xs btn-ghost"
          onClick={() => dispatch(increment(item.id))}
        >
          <FiPlus size={20} />
        </button>
      </div>
      <button
        className="btn btn-xs btn-error btn-outline"
        onClick={() => dispatch(remove(item.id))}
      >
        <RxCross2 size={15} />
      </button>
    </div>
  );
}
