import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const USERS = [
  {
    email: "buyer@example.com",
    password: "123456",
    role: "buyer",
  },
  {
    email: "seller@example.com",
    password: "123456",
    role: "seller",
  },
];

const initialState = {
  user: null,
  loading: false,
  error: null,
};

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

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
