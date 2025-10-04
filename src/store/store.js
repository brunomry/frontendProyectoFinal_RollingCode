import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "@/features/products/slices/productsSlice";
import authSlice from "@/features/auth/slices/authSlice";
import registerSlice from "@/features/auth/slices/registerSlice";
import filtersSlice from "@/features/filters/filtersSlice";

export const store = configureStore({
    reducer:{
       auth: authSlice,
       register: registerSlice,
       products: productsSlice,
       filters: filtersSlice
    }
})