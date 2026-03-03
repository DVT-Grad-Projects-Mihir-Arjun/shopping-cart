import { useCart } from '../contexts/CartContext.tsx';
import CartIcon from './CartIcon.tsx';
import CartItem from './CartItems.tsx';
import CartSummary from './CartSummary.tsx';

export default function CartDropdown() {
    const cart = useCart();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="dropdown dropdown-end">
            <CartIcon totalItems={totalItems} />
            <div tabIndex={0} className="dropdown-content card card-compact bg-base-100 z-10 mt-3 w-80 shadow-xl">
                <div className="card-body">
                    <h3 className="card-title text-lg">Your Cart</h3>
                    {cart.length === 0
                        ? <p className="text-sm text-gray-500">Your cart is empty</p>
                        : <>
                            {cart.map(item => <CartItem key={item.id} item={item} />)}
                            <CartSummary totalPrice={totalPrice} />
                        </>
                    }
                </div>
            </div>
        </div>
    );
}