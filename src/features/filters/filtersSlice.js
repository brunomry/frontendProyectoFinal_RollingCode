import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  category: "",
  status: "",
  price: ""
}

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers:{
     setFilters: (state, action) => {
      return { ...state, ...action.payload };
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setCategory: (state,action) => {
      state.category = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setPrice: (state, action) => {
      state.price = action.payload;
    },
    clearFilters: () => initialState,
  }
});

export const { setFilters, setSearch, setCategory, setStatus, setPrice, clearFilters} = filtersSlice.actions;

export default filtersSlice.reducer;