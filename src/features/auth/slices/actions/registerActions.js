import { createAsyncThunk } from "@reduxjs/toolkit";
const URL_REGISTER = import.meta.env.VITE_API_REGISTRO;

export const registerUser = createAsyncThunk("auth/register", async(usuario, { rejectWithValue }) => {
    try{
        const response = await fetch(URL_REGISTER, {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(usuario)
        });

        const data = await response.json();

        if (!data.success) throw data.error;

        return data;
    } catch (error) {
        return rejectWithValue(error);
    }
});