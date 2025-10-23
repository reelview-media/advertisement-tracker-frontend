import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: null,
  isAuthorized: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthData: (state, action) => {
      state.userInfo = action.payload;
      state.isAuthorized = true;
    },
    clearAuth: (state) => {
      state.userInfo = null; 
      state.isAuthorized = false; 
    },
  },
});

export const { setAuthData, clearAuth } = authSlice.actions;
export default authSlice.reducer;
