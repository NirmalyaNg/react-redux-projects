import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  products: [],
  error: null,
};

export const fetchProducts = createAsyncThunk("product/fetchProducts", (arg, thunkApi) => {
  if (thunkApi.getState().product.products.length === 0) {
    return fetch("https://fakestoreapi.com/products").then((response) => response.json());
  } else {
    return thunkApi.fulfillWithValue(thunkApi.getState().product.products);
  }
});

const productsSlice = createSlice({
  name: "product",
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.error = null;
    });

    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action.error.message;
    });
  },
});

export default productsSlice.reducer;
export const productActions = productsSlice.actions;
