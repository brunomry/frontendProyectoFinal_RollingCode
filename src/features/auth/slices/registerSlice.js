import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./actions/registerActions";

const initialState = {
    user: JSON.parse(sessionStorage.getItem("usuarioLogeado")) || null,
    status: "idle",
    isAuth:!!sessionStorage.getItem("usuarioLogeado"),
    error: null
}

const registerSlice = createSlice({
    name: "register",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.status = "loading",
                state.error = null
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.status = "succeded";
                state.user = action.payload.data;
                state.isAuth = true;
                sessionStorage.setItem("usuarioLogeado", JSON.stringify(action.payload.data));
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
                state.isAuth = false;
            })
    }
});

export default registerSlice.reducer;