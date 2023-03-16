import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type cartItem = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  count: number;
};

interface CartSliceState {
  totalPrice: number;
  totalCount: number;
  cartItems: cartItem[];
}

const initialState: CartSliceState = {
  totalPrice: 0,
  totalCount: 0,
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addTocart: (state, action: PayloadAction<cartItem>) => {
      const findItem = state.cartItems.find(
        (obj) => obj.id === action.payload.id
      );
      if (findItem) {
        findItem.count++;
      } else {
        state.cartItems.push({ ...action.payload, count: 1 });
      }

      state.totalCount = state.cartItems.reduce( (prev, current) => prev + current.count, 0);
      state.totalPrice = state.cartItems.reduce( (prev, current) => prev + current.count * current.price, 0)
    },

    minusFromCart: (state, action:PayloadAction<string>) => {
      const findItem = state.cartItems.find(
        (obj) => obj.id === action.payload
      );
      if (findItem) {
        findItem.count--;
        if(findItem.count < 1) {
          state.cartItems = state.cartItems.filter( (obj) => obj.id !== action.payload )
        }
      }

      state.totalCount = state.cartItems.reduce( (prev, current) => prev + current.count, 0);
      state.totalPrice = state.cartItems.reduce( (prev, current) => prev + current.count * current.price, 0)
    },

    removeFromCart: (state, action:PayloadAction<string>) => {
      state.cartItems = state.cartItems.filter( (obj) => obj.id !== action.payload );

      state.totalCount = state.cartItems.reduce( (prev, current) => prev + current.count, 0);
      state.totalPrice = state.cartItems.reduce( (prev, current) => prev + current.count * current.price, 0)
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.totalCount = 0;
      state.totalPrice = 0
    }
  },
});

export const { addTocart, minusFromCart, clearCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
