import { createAsyncThunk } from "@reduxjs/toolkit";
const URL_Products = import.meta.env.VITE_API_PRODUCTOS;
const URL_Product = import.meta.env.VITE_API_PRODUCTO;
const URL_Products_filters = import.meta.env.VITE_API_PRODUCTOS_FILTROS;

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch(URL_Products);
    return await response.json();
  }
);

export const fetchProduct = createAsyncThunk(
  "products/fetchProduct",
  async (id) => {
    const response = await fetch(`${URL_Product}/${id}`);
    return await response.json();
  }
);

export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (product, { getState, rejectWithValue }) => {
    const { auth } = getState();
    const token = auth?.user?.token;

    try {
      const response = await fetch(`${URL_Products}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(product),
      });

      const data = await response.json();

      if (!data.success) throw data.error;

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id, { getState }) => {
    const { auth } = getState();
    const token = auth.user?.token;

    const response = await fetch(`${URL_Product}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return await response.json();
  }
);

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async ({ id, data }, { getState }) => {
    const { auth } = getState();
    const token = auth.user?.token;

    const response = await fetch(`${URL_Product}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    return await response.json();
  }
);

export const filterProducts = createAsyncThunk(
  "products/filterProducts",
  async (filters = {}) => {
    const query = new URLSearchParams(filters).toString();
    const response = await fetch(`${URL_Products_filters}?${query}`);
    return await response.json();
  }
);
