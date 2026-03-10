import CartDropdown from "./CartDropdown";

export default function Navbar() {
    return (
        <div className="navbar bg-base-100 shadow-sm px-4">
            <div className="flex-1">
                <a className="text-2xl font-bold text-primary">My Shop</a>
            </div>
            <div className="flex-none">
                <CartDropdown />
            </div>
        </div>
    );
}