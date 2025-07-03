import { createAsyncThunk } from "@reduxjs/toolkit";

const USERS = [
  { email: "buyer@example.com", password: "123456", role: "buyer" },
  { email: "seller@example.com", password: "123456", role: "seller" },
];

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password, role }, thunkAPI) => {
    const user = USERS.find(
      (u) => u.email === email && u.password === password && u.role === role
    );
    if (user) return user;
    return thunkAPI.rejectWithValue("Invalid credentials or role");
  }
);
