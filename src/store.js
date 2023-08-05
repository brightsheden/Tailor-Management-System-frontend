import { configureStore } from '@reduxjs/toolkit';
import { loginReducer } from './State/Slices/UserSlice';
import { createOrderReducer, deleteOrderReducer, editOrderReducer, getOrderByIdReducer, ordersReducer } from './State/Slices/OrderSlice';
import  { deleteCustomerReducer, getCustomerBydIdReducer, listCustomerReducer }  from './State/Slices/CustomerSlice';
import  { createStyleReducer, deleteStyleReducer, styleReducer }  from './State/Slices/StyleSlice';
import   { deleteTailorReducer, getTailorIdReducer, listTailorReducer, registerTailorReducer }  from './State/Slices/TailorSlice';

const store = configureStore({
  reducer: {
    user: loginReducer,
    order:ordersReducer,
    orderId:getOrderByIdReducer,
    createOrder:createOrderReducer,
    deleteOrder:deleteOrderReducer,
    editOrder:editOrderReducer,
    customer:listCustomerReducer,
    customerId:getCustomerBydIdReducer,
    deleteCustomer:deleteCustomerReducer,
    style:styleReducer,
    deleteStyle:deleteStyleReducer,
    addStyle:createStyleReducer,
    tailor:listTailorReducer,
    tailorId: getTailorIdReducer,
    deleteTailor:deleteTailorReducer,
    registerTailor:registerTailorReducer
  },
});

export default store;
