import { MdOutlineShoppingCart } from "react-icons/md";

type Props = { totalItems: number };

export default function CartIcon({ totalItems }: Props) {
    return (
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
                <MdOutlineShoppingCart size={30} />
                {totalItems > 0 && (
                    <span className="badge badge-sm badge-primary indicator-item">{totalItems}</span>
                )}
            </div>
        </div>
    );
}