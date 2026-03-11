import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type CartItem = {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
};

type CartState = CartItem[];

const cartSlice = createSlice({
  name: "cart",
  initialState: [] as CartState,
  reducers: {
    addToCart(state, action: PayloadAction<Omit<CartItem, "quantity">>) {
      console.log("add to cart");
      const exists = state.find((item) => item.id === action.payload.id);
      if (exists) {
        exists.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    increment(state, action: PayloadAction<number>) {
      const item = state.find((item) => item.id === action.payload);
      if (item) item.quantity += 1;
    },
    decrement(state, action: PayloadAction<number>) {
      const item = state.find((item) => item.id === action.payload);
      if (item) item.quantity = Math.max(1, item.quantity - 1);
    },
    remove(state, action: PayloadAction<number>) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, increment, decrement, remove } = cartSlice.actions;
export default cartSlice.reducer;
