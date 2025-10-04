import { createSlice } from "@reduxjs/toolkit";
import {
  createProduct,
  deleteProduct,
  fetchProduct,
  fetchProducts,
  filterProducts,
  updateProduct,
} from "./actions/productsActions";
import {
  createProductFullfilled,
  createProductPending,
  createProductRejected,
  deleteProductFullfilled,
  deleteProductPending,
  deleteProductRejected,
  fetchProductFullfilled,
  fetchProductPending,
  fetchProductRejected,
  fetchProductsFullfilled,
  fetchProductsPending,
  fetchProductsRejected,
  filterProductsFulfilled,
  filterProductsPending,
  filterProductsRejected,
  updateProductFullfilled,
  updateProductPending,
  updateProductRejected,
} from "./handlers/productsHandlers";

const initialState = {
  product: null,
  products: [],
  filteredProducts: [],
  status: "idle",
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, fetchProductsPending)
      .addCase(fetchProducts.fulfilled, fetchProductsFullfilled)
      .addCase(fetchProducts.rejected, fetchProductsRejected)
      .addCase(fetchProduct.pending, fetchProductPending)
      .addCase(fetchProduct.fulfilled, fetchProductFullfilled)
      .addCase(fetchProduct.rejected, fetchProductRejected)
      .addCase(createProduct.pending, createProductPending)
      .addCase(createProduct.fulfilled, createProductFullfilled)
      .addCase(createProduct.rejected, createProductRejected)
      .addCase(deleteProduct.pending, deleteProductPending)
      .addCase(deleteProduct.fulfilled, deleteProductFullfilled)
      .addCase(deleteProduct.rejected, deleteProductRejected)
      .addCase(updateProduct.pending, updateProductPending)
      .addCase(updateProduct.fulfilled, updateProductFullfilled)
      .addCase(updateProduct.rejected, updateProductRejected)
      .addCase(filterProducts.pending, filterProductsPending)
      .addCase(filterProducts.fulfilled, filterProductsFulfilled)
      .addCase(filterProducts.rejected, filterProductsRejected)
  },
});

export default productsSlice.reducer;
