import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedin: false, isDarkMode: true },
  reducers: {
    login(state, action) {
      state.isLoggedin = true;
    },
    logout(state) {
      state.isLoggedin = false;
    },
    setDarkMode(state) {
      state.isDarkMode = true;
    },
    setLightMode(state) {
      state.isDarkMode = false;
    },
  },
});

export const authAction = authSlice.actions;
export default authSlice;
