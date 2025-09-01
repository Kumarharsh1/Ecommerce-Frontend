import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.id === item.id);

      if (existItem) {
        state.cartItems = state.cartItems.map((x) =>
          x.id === existItem.id ? { ...item, qty: existItem.qty + 1 } : x
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }
    },
    // Add other reducers for removing, decreasing quantity, etc.
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;