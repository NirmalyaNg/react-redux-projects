import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = state.products.find((p) => p.id === action.payload.id);
      if (!product) {
        state.products.push({
          ...action.payload,
          quantity: 1,
        });
      } else {
        product.quantity++;
      }
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter((p) => p.id !== action.payload);
    },
    increment: (state, action) => {
      const product = state.products.find((p) => p.id === action.payload);
      product.quantity++;
    },
    decrement: (state, action) => {
      const product = state.products.find((p) => p.id === action.payload);
      if (product.quantity > 1) {
        product.quantity--;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
