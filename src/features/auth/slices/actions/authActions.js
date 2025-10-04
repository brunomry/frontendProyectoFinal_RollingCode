import { createAsyncThunk } from "@reduxjs/toolkit";
const URL_Login = import.meta.env.VITE_API_LOGIN;

export const loginUser = createAsyncThunk(
  "auth/login",
  async (usuario, { rejectWithValue }) => {
    try {
      const response = await fetch(URL_Login, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario),
      });

      const data = await response.json();

      if (!data.success) throw data.error;

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
