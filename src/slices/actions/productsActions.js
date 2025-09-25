import { createAsyncThunk } from "@reduxjs/toolkit";
const URL_Productos = import.meta.env.VITE_API_PRODUCTOS;

export const fetchProducts = createAsyncThunk("products/fetchProducts", async()=>{
    const response = await fetch(URL_Productos);
    return await response.json();
})