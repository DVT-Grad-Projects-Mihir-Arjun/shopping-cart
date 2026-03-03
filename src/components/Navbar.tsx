import CartDropdown from "./CartDropdown";

export default function Navbar() {
    return (
        <div className="navbar bg-base-100 shadow-sm px-4">
            <div className="flex-1">
                <a className="text-xl font-bold">My Shop</a>
            </div>
            <div className="flex-none">
                <CartDropdown />
            </div>
        </div>
    );
}