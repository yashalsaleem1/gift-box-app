import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../user/reducers";

const storedUser = localStorage.getItem("user");

const preloadedState = {
  auth: {
    user: storedUser ? JSON.parse(storedUser) : null,
    loading: false,
    error: null,
  },
};

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  preloadedState,
});
