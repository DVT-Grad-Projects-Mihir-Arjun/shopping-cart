type Props = { totalPrice: number };

export default function CartSummary({ totalPrice }: Props) {
    return (
        <div>
            <div className="flex justify-between font-bold pt-2">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
            </div>
            <button className="btn btn-primary btn-sm mt-2 w-full" onClick={() => alert('DM for Special Price')}>
                Checkout
            </button>
        </div>
    );
}