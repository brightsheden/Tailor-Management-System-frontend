import { createSlice } from "@reduxjs/toolkit";
import { OrderById, createOrder, deleteOrder, editOrder, getAllOrders } from "../Actions/OrderActions";



 

const initialState = {
 
  isRequest: false,
  isSuccess: false,
  errorMessage: "",



};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllOrders.pending, (state) => {
        state.isRequest = true;
      })
      .addCase(getAllOrders.fulfilled, (state, action) => {
        state.isRequest = false;
        state.isSuccess = true;
        state.data = action.payload;
      })
      .addCase(getAllOrders.rejected, (state, action) => {
        state.isRequest = false;
        state.isSuccess = false;
        state.errorMessage = action.payload;
      })
   
  },
});

export const createOrderSlice = createSlice({
  name: "createOrder",
  initialState:{
    orderCreateRequest:false,
    orderCreateSuccess:false,
    orderCreateFailed:"",
  },

  reducers: {
    resetOrderCreateState: (state) => {
      state.orderCreateRequest = false;
      state.orderCreateSuccess = false;
      state.orderCreateFailed = "";
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
 
      //create order cases
      .addCase(createOrder.pending, (state) => {
        state.orderCreateRequest = true;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.orderCreateRequest = false;
        state.orderCreateSuccess = true;
        state.data = action.payload;
        state= initialState
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.orderCreateSuccess = false;
        state.orderCreateSuccess = false;
        state.orderCreateFailed = action.payload;
      })
      
     
      ;
  },


})


export const editOrderSlice = createSlice({
  name: "editOrder",
  initialState:{
    orderEditRequest:false,
    orderEditeSuccess:false,
    orderEditFailed:"",
  },
  reducers: {
    resetState: (state) => {
      state.orderEditRequest = false;
      state.orderEditeSuccess = false;
      state.orderEditFailed = "";
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(editOrder.pending, (state) => {
        state.orderEditRequest = true;
      })
      .addCase(editOrder.fulfilled, (state, action) => {
        state.orderEditRequest = false;
        state.orderEditeSuccess = true;
        state.data = action.payload;
        state= initialState
      })
      .addCase(editOrder.rejected, (state, action) => {
        state.orderEditeSuccess = false;
        state.orderEditeSuccess = false;
        state.orderEditFailed = action.payload;
      })
      
     
      ;
  },


})


export const getOrderBydIdSlice = createSlice({
  name: "orderId",
  initialState:{
    orderIdRequest:false,
    orderIdSuccess:false,
    orderIdFailed:"",
  },

  reducers: {
    resetOrderIdState: (state) => {
      state.orderIdRequest = false;
      state.orderIdSuccess = false;
      state.orderIdFailed = "";
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(OrderById.pending, (state) => {
        state.orderIdRequest = true;
      })
      .addCase(OrderById.fulfilled, (state, action) => {
        state.orderIdRequest = false;
        state.orderIdSuccess = true;
        state.data = action.payload;
       
      })
      .addCase(OrderById.rejected, (state, action) => {
        state.orderIdSuccess = false;
        state.orderIdSuccess = false;
        state.orderIdFailed = action.payload;
      })
      
     
      ;
  },


})



export const deleteOrderSlice = createSlice({
  name: "deleteOrder",
  initialState:{
    orderDeleteRequest:false,
    orderDeleteSuccess:false,
    orderDeleteFailed:"",
  },

  reducers: {
    resetOrderDeleteState: (state) => {
      state.orderDeleteRequest = false;
      state.orderDeleteSuccess = false;
      state.orderDeleteFailed = "";
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(deleteOrder.pending, (state) => {
        state.orderDeleteRequest = true;
      })
      .addCase(deleteOrder.fulfilled, (state) => {
        state.orderDeleteRequest = false;
        state.orderDeleteSuccess = true;
       
       
      })
      .addCase(deleteOrder.rejected, (state, action) => {
        state.orderDeleteSuccess = false;
        state.orderDeleteSuccess = false;
        state.orderDeleteFailed = action.payload;
      })
      
     
      ;
  },


})

//export default orderSlice.reducer;
//export default createOrderSlice.reducer;

export const ordersReducer = orderSlice.reducer;
export const createOrderReducer = createOrderSlice.reducer;
export const editOrderReducer = editOrderSlice .reducer;
export const getOrderByIdReducer =getOrderBydIdSlice.reducer;
export const deleteOrderReducer =deleteOrderSlice.reducer;




export const { resetState } = editOrderSlice.actions;
export const { resetOrderIdState } = getOrderBydIdSlice.actions;
export const {resetOrderCreateState} = createOrderSlice.actions;
export const {resetOrderDeleteState} = deleteOrderSlice.actions;
