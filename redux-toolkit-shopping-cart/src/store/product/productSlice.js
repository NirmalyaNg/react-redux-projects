import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  products: [],
  error: null,
  filteredProducts: [],
  filterMode: false,
};

export const fetchProducts = createAsyncThunk("product/fetchProducts", (arg, thunkApi) => {
  if (thunkApi.getState().product.products.length === 0 || arg === "ALL_CATEGORIES") {
    return fetch("https://fakestoreapi.com/products").then((response) => response.json());
  } else {
    return thunkApi.fulfillWithValue(thunkApi.getState().product.products);
  }
});

export const fetchProductsByCategory = createAsyncThunk(
  "product/fetchProductsByCategory",
  (arg, thunkApi) => {
    const products = thunkApi.getState().product.products;
    const isCategorySame = products.every((p) => p.category === arg);
    if (isCategorySame) {
      return thunkApi.fulfillWithValue(products);
    } else {
      return fetch(`https://fakestoreapi.com/products/category/${arg}`).then((res) =>
        res.json()
      );
    }
  }
);

const productsSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    filterByPrice: (state, action) => {
      state.filterMode = true;
      state.filteredProducts = state.products.filter((p) => {
        return p.price >= action.payload.min && p.price <= action.payload.max;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.filterMode = false;
      state.loading = true;
    });

    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.filterMode = false;
      state.loading = false;
      state.products = action.payload;
      state.error = null;
    });

    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.filterMode = false;
      state.loading = false;
      state.products = [];
      state.error = action.error.message;
    });

    builder.addCase(fetchProductsByCategory.pending, (state) => {
      state.filterMode = false;
      state.loading = true;
    });

    builder.addCase(fetchProductsByCategory.fulfilled, (state, action) => {
      state.filterMode = false;
      state.loading = false;
      state.products = action.payload;
      state.error = null;
    });

    builder.addCase(fetchProductsByCategory.rejected, (state, action) => {
      state.filterMode = false;
      state.loading = false;
      state.error = action.error.message;
      state.products = [];
    });
  },
});

export default productsSlice.reducer;
export const productActions = productsSlice.actions;
