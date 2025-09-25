import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./actions/productsActions";

const initialState = {
    products: [],
    status: "idle",
    error: null
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = "Cargando";
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = "Exitoso";
                state.products = action.payload.data;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = "Denegado";
                state.error = action.error.message;
            })
    }
})

export default productsSlice.reducer;