import { createSlice } from "@reduxjs/toolkit";
import { customerById, deleteCustomer, listCustomers, registerCustomer } from "../Actions/CustomerActions";




 

const initialState = {
 
  isRequest: false,
  isSuccess: false,
  errorMessage: "",
};

export const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(listCustomers.pending, (state) => {
        state.isRequest = true;
      })
      .addCase(listCustomers.fulfilled, (state, action) => {
        state.isRequest = false;
        state.isSuccess = true;
        state.data = action.payload;
      })
      .addCase(listCustomers.rejected, (state, action) => {
        state.isRequest = false;
        state.isSuccess = false;
        state.errorMessage = action.payload;
      })
      
     
      ;
  },
});

export const getCustomerBydIdSlice = createSlice({
  name: "customerId",
  initialState:{
    customerIdRequest:false,
    customerIdSuccess:false,
    customerIdFailed:"",
  },

  reducers: {
    resetcustomerIdState: (state) => {
      state.customerIdRequest = false;
      state.customerIdSuccess = false;
      state.customerIdFailed = "";
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(customerById.pending, (state) => {
        state.customerIdRequest = true;
      })
      .addCase(customerById.fulfilled, (state, action) => {
        state.customerIdRequest = false;
        state.customerIdSuccess = true;
        state.data = action.payload;
       
      })
      .addCase(customerById.rejected, (state, action) => {
        state.customerIdSuccess = false;
        state.customerIdSuccess = false;
        state.customerIdFailed = action.payload;
      })
      
     
      ;
  },


})

export const deleteCustomerSlice = createSlice({
  name: "deleteCustomer",
  initialState:{
    CustomerDeleteRequest:false,
    CustomerDeleteSuccess:false,
    CustomerDeleteFailed:"",
  },

  reducers: {
    resetCustomerDeleteState: (state) => {
      state.CustomerDeleteRequest = false;
      state.CustomerDeleteSuccess = false;
      state.CustomerDeleteFailed = "";
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(deleteCustomer.pending, (state) => {
        state.CustomerDeleteRequest = true;
      })
      .addCase(deleteCustomer.fulfilled, (state) => {
        state.CustomerDeleteRequest = false;
        state.CustomerDeleteSuccess = true;
       
       
      })
      .addCase(deleteCustomer.rejected, (state, action) => {
        state.CustomerDeleteSuccess = false;
        state.CustomerDeleteSuccess = false;
        state.CustomerDeleteFailed = action.payload;
      })
      
     
      ;
  },


})



export const registerCustomerSlice = createSlice({
  name: "registerCustomer",
  initialState:{
    createCustomerRequest:false,
    createCustomerSuccess:false,
    createCustomerFailed:"",
  },

  reducers: {
    resetcreateCustomerState: (state) => {
      state.createCustomerRequest = false;
      state.createCustomerSuccess = false;
      state.createCustomerFailed = "";
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
 
      //create order cases
      .addCase(registerCustomer.pending, (state) => {
        state.createCustomerRequest = true;
      })
      .addCase(registerCustomer.fulfilled, (state, action) => {
        state.createCustomerRequest = false;
        state.createCustomerSuccess = true;
        state.data = action.payload;
        state= initialState
      })
      .addCase(registerCustomer.rejected, (state, action) => {
        state.createCustomerSuccess = false;
        state.createCustomerSuccess = false;
        state.createCustomerFailed = action.payload;
      })
      
     
      ;
  },


})



export const listCustomerReducer = customerSlice.reducer;
export const getCustomerBydIdReducer = getCustomerBydIdSlice.reducer
export const deleteCustomerReducer = deleteCustomerSlice.reducer

export const {resetCustomerDeleteState} = deleteCustomerSlice.actions
export const {resetcustomerIdState} = getCustomerBydIdSlice.actions