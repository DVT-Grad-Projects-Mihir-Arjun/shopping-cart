import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./store";

export const useCart = () => useSelector((state: RootState) => state.cart);
export const useCartDispatch = () => useDispatch<AppDispatch>();
