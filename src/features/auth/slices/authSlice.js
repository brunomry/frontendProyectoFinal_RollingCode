import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./actions/authActions";

const initialState = {
    user: JSON.parse(sessionStorage.getItem("usuarioLogeado")) || null,
    status: "idle",
    isAuth:!!sessionStorage.getItem("usuarioLogeado"),
    error: null
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        logout: (state) => {
            state.user = null;
            state.isAuth = false;
            state.status = "idle";
            state.error = null;
            sessionStorage.removeItem("usuarioLogeado");
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(loginUser.pending, (state) => {
            state.status = "loading",
            state.error = null;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            if(action.payload.success){
                state.status = "succeded";
                state.user = action.payload.data;
                state.isAuth = true;
                sessionStorage.setItem("usuarioLogeado", JSON.stringify(action.payload.data));
            }else{
                state.status = "failed";
                state.error = action.payload.message;
                state.isAuth = false;
            }
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
            state.isAuth = false;
        })
    }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;