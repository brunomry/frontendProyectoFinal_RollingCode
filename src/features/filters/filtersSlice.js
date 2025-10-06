import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nombre: "",
  categoria: "",
  estado: "",
  precio: ""
}

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers:{
     setFilters: (state, action) => {
      return { ...state, ...action.payload };
    },
    setNombre: (state, action) => {
      state.nombre = action.payload;
    },
    setCategoria: (state,action) => {
      state.categoria = action.payload;
    },
    setEstado: (state, action) => {
      state.estado = action.payload;
    },
    setPrecio: (state, action) => {
      state.precio = action.payload;
    },
    clearFilters: () => initialState,
  }
});

export const { setFilters, setNombre, setCategoria, setEstado, setPrecio, clearFilters} = filtersSlice.actions;

export default filtersSlice.reducer;