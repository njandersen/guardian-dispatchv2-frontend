import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    accessToken: null,
    refreshToken: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    setRefreshToken: (state, action) => {
      state.refreshToken = action.payload;
    },
    setUserFromLocalStorage: (state) => {
      const accessToken = localStorage.getItem("accessToken");
      const refreshToken = localStorage.getItem("refreshToken");
      if (accessToken && refreshToken) {
        state.accessToken = accessToken;
        state.refreshToken = refreshToken;
        state.user = { isLoggedIn: true };
      }
    },
  },
});

export const {
  setUser,
  setAccessToken,
  setRefreshToken,
  setUserFromLocalStorage,
} = authSlice.actions;
export default authSlice.reducer;
