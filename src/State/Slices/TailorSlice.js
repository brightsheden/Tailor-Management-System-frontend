import { createSlice } from "@reduxjs/toolkit";
import { TailorById, deleteTailor, listTailors, registerTailor } from "../Actions/TailorActions";





 

const initialState = {
 
  isRequest: false,
  isSuccess: false,
  errorMessage: "",
};

export const tailorSlice = createSlice({
  name: "tailor",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(listTailors.pending, (state) => {
        state.isRequest = true;
      })
      .addCase(listTailors.fulfilled, (state, action) => {
        state.isRequest = false;
        state.isSuccess = true;
        state.data = action.payload;
      })
      .addCase(listTailors.rejected, (state, action) => {
        state.isRequest = false;
        state.isSuccess = false;
        state.errorMessage = action.payload;
      })
      
     
      ;
  },
});


export const registerTailorSlice = createSlice({
  name: "createOrder",
  initialState:{
    createTailorRequest:false,
    createTailorSuccess:false,
    createTailorFailed:"",
  },

  reducers: {
    resetcreateTailorState: (state) => {
      state.createTailorRequest = false;
      state.createTailorSuccess = false;
      state.createTailorFailed = "";
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
 
      //create order cases
      .addCase(registerTailor.pending, (state) => {
        state.createTailorRequest = true;
      })
      .addCase(registerTailor.fulfilled, (state, action) => {
        state.createTailorRequest = false;
        state.createTailorSuccess = true;
        state.data = action.payload;
        state= initialState
      })
      .addCase(registerTailor.rejected, (state, action) => {
        state.createTailorSuccess = false;
        state.createTailorSuccess = false;
        state.createTailorFailed = action.payload;
      })
      
     
      ;
  },


})


export const getTailorIdSlice = createSlice({
  name: "tailorId",
  initialState:{
    tailorIdRequest:false,
    tailorIdSuccess:false,
    tailorIdFailed:"",
  },

  reducers: {
    resettailorIdState: (state) => {
      state.tailorIdRequest = false;
      state.tailorIdSuccess = false;
      state.tailorIdFailed = "";
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(TailorById.pending, (state) => {
        state.tailorIdRequest = true;
      })
      .addCase(TailorById.fulfilled, (state, action) => {
        state.tailorIdRequest = false;
        state.tailorIdSuccess = true;
        state.data = action.payload;
       
      })
      .addCase(TailorById.rejected, (state, action) => {
        state.tailorIdSuccess = false;
        state.tailorIdSuccess = false;
        state.tailorIdFailed = action.payload;
      })
      
     
      ;
  },


})


export const deleteTailorSlice = createSlice({
  name: "deletetailor",
  initialState:{
    tailorDeleteRequest:false,
    tailorDeleteSuccess:false,
    tailorDeleteFailed:"",
  },

  reducers: {
    resettailorDeleteState: (state) => {
      state.tailorDeleteRequest = false;
      state.tailorDeleteSuccess = false;
      state.tailorDeleteFailed = "";
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(deleteTailor.pending, (state) => {
        state.tailorDeleteRequest = true;
      })
      .addCase(deleteTailor.fulfilled, (state) => {
        state.tailorDeleteRequest = false;
        state.tailorDeleteSuccess = true;
       
       
      })
      .addCase(deleteTailor.rejected, (state, action) => {
        state.tailorDeleteSuccess = false;
        state.tailorDeleteSuccess = false;
        state.tailorDeleteFailed = action.payload;
      })
      
     
      ;
  },


})


export const listTailorReducer = tailorSlice.reducer;
export const registerTailorReducer = registerTailorSlice.reducer;
export const getTailorIdReducer = getTailorIdSlice.reducer
export const deleteTailorReducer = deleteTailorSlice.reducer
export const {resetcreateTailorState} = registerTailorSlice.actions;
export const {resettailorIdState} = getTailorIdSlice.actions;
export const {resettailorDeleteState} = deleteTailorSlice.actions