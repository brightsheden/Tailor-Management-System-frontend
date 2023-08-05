import { createSlice } from "@reduxjs/toolkit";
import { addStyle, deleteStyle, editStyle, listStyles } from "../Actions/StyleActions";




 

const initialState = {
 
  isRequest: false,
  isSuccess: false,
  errorMessage: "",
};

export const styleSlice = createSlice({
  name: "style",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(listStyles.pending, (state) => {
        state.isRequest = true;
      })
      .addCase(listStyles.fulfilled, (state, action) => {
        state.isRequest = false;
        state.isSuccess = true;
        state.data = action.payload;
      })
      .addCase(listStyles.rejected, (state, action) => {
        state.isRequest = false;
        state.isSuccess = false;
        state.errorMessage = action.payload;
      })
      
     
      ;
  },
});

export const deleteStyleSlice = createSlice({
  name: "deleteStyle",
  initialState:{
    styleDeleteRequest:false,
    styleDeleteSuccess:false,
    styleDeleteFailed:"",
  },

  reducers: {
    resetStyleDeleteState: (state) => {
      state.styleDeleteRequest = false;
      state.styleDeleteSuccess = false;
      state.styleDeleteFailed = "";
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(deleteStyle.pending, (state) => {
        state.styleDeleteRequest = true;
      })
      .addCase(deleteStyle.fulfilled, (state) => {
        state.styleDeleteRequest = false;
        state.styleDeleteSuccess = true;
       
       
      })
      .addCase(deleteStyle.rejected, (state, action) => {
        state.styleDeleteSuccess = false;
        state.styleDeleteSuccess = false;
        state.styleDeleteFailed = action.payload;
      })
      
     
      ;
  },


})


export const createStyleSlice = createSlice({
  name: "createStyle",
  initialState:{
    styleCreateRequest:false,
    styleCreateSuccess:false,
    styleCreateFailed:"",
  },

  reducers: {
    resetstyleCreateState: (state) => {
      state.styleCreateRequest = false;
      state.styleCreateSuccess = false;
      state.styleCreateFailed = "";
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
 
      //create style cases
      .addCase(addStyle.pending, (state) => {
        state.styleCreateRequest = true;
      })
      .addCase(addStyle.fulfilled, (state, action) => {
        state.styleCreateRequest = false;
        state.styleCreateSuccess = true;
        state.data = action.payload;
        state= initialState
      })
      .addCase(addStyle.rejected, (state, action) => {
        state.styleCreateSuccess = false;
        state.styleCreateSuccess = false;
        state.styleCreateFailed = action.payload;
      })
      
     
      ;
  },


})


export const updateStyleSlice = createSlice({
  name: "updateStyle",
  initialState:{
    styleUpdateRequest:false,
    styleUpdateSuccess:false,
    styleUpdateFailed:"",
  },

  reducers: {
    resetstyleUpdateState: (state) => {
      state.styleUpdateRequest = false;
      state.styleUpdateSuccess = false;
      state.styleUpdateFailed = "";
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
 
      //Update style cases
      .addCase(editStyle.pending, (state) => {
        state.styleUpdateRequest = true;
      })
      .addCase(editStyle.fulfilled, (state, action) => {
        state.styleUpdateRequest = false;
        state.styleUpdateSuccess = true;
        state.data = action.payload;
        state= initialState
      })
      .addCase(editStyle.rejected, (state, action) => {
        state.styleUpdateSuccess = false;
        state.styleUpdateSuccess = false;
        state.styleUpdateFailed = action.payload;
      })
      
     
      ;
  },


})


export const styleReducer = styleSlice.reducer;
export const deleteStyleReducer = deleteStyleSlice.reducer;
export const createStyleReducer = createStyleSlice.reducer;
export const updateStyleReducer = updateStyleSlice.reducer;
export const {resetstyleUpdateState} = updateStyleSlice.actions
export const {resetStyleDeleteState} = deleteStyleSlice.actions;
export const {resetstyleCreateState} = createStyleSlice.actions;
