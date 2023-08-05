import { createSlice } from "@reduxjs/toolkit";
import { login, profile } from "../Actions/UserActions";


const userInfoFromStorage = localStorage.getItem("userInfo") ?
    JSON.parse(localStorage.getItem("userInfo")) : null

const userProfileFromStorage = localStorage.getItem("userProfile") ?
    JSON.parse(localStorage.getItem("userProfile")) : null    

const initialState = {
  userInfo:  userInfoFromStorage,
  userProfile:userProfileFromStorage,
  isRequest: false,
  isSuccess: false,
  errorMessage: "",
};


export const loginSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetUsereState: (state) => {
      state.isRequest = false;
      state.isSuccess = false;
      state.errorMessage = "";
      state.data = null;
      localStorage.removeItem('userInfo')
      localStorage.removeItem('userProfile')
    },
  },

  
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isRequest = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isRequest = false;
        state.isSuccess = true;
        state.data = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isRequest = false;
        state.isSuccess = false;
        state.errorMessage = action.payload;
      })
      
      .addCase(profile.pending, (state) => {
        state.isRequest = true;
      })
      .addCase(profile.fulfilled, (state, action) => {
        state.isRequest = false;
        state.isSuccess = true;
        state.data = action.payload;
      })
      .addCase(profile.rejected, (state, action) => {
        state.isRequest = false;
        state.isSuccess = false;
        state.errorMessage = action.payload;
      })
      ;
  },
});

export const loginReducer = loginSlice.reducer;
export const {resetUsereState} = loginSlice.actions
