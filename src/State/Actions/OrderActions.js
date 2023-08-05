import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';





export const getAllOrders = createAsyncThunk('order/list', async (arg,{getState}) => {
    const state = getState();
   
    try {

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${state.user.userInfo.token}`
            }
        }

        const { data } = await axios.get(
            'http://127.0.0.1:8000/api/company/allWork/',
          
            config
        );

        return data;

    } catch (error) {
        return error.message;
    }
});

export const OrderById = createAsyncThunk('order/id',async (id,{getState}) => {
    const state = getState();


    try {
        
       

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${state.user.userInfo.token}`
            }
        }

        const { data } = await axios.get(
            `http://127.0.0.1:8000/api/company/work/${id}`,

            config
        ); 
       
        return data;

    } catch (error) {
        return error.message;
    }
});

export const createOrder = createAsyncThunk('order/create', async ({custormerId,styleId,tailorId,price,measurement},{getState}) => {
    const state = getState();

    try {
        
       

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${state.user.userInfo.token}`
            }
        }

        const { data } = await axios.post(
            'http://127.0.0.1:8000/api/company/createWork/',
          
            {
                "customerId":custormerId,
                "styleId":styleId,
                "tailorId":tailorId,
                "price":price,
                "measurement":measurement

            },
            config
        );

        


     
        
       
        return data;

    } catch (error) {
        return error.message;
    }
});


export const editOrder = createAsyncThunk('order/edit', async (order,{getState}) => {
    const state = getState();
    

    try {
        
       

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${state.user.userInfo.token}`
            }
        }

        const { data } = await axios.put(
            `http://127.0.0.1:8000/api/company/updatework/${order._id}`,
            {
                "style":order.style,
                "tailor":order.tailor,
                "price":order.price,
                "mearsurement":order.measurement,
                "isCompleted":order.isCompleted,
            },
            
            config
        );

        


     
        
       
        return data;

    } catch (error) {
        return error.message;
    }
});


export const deleteOrder = createAsyncThunk('order/delete', async (id,{getState}) => {
    const state = getState();
   
    

    try {
        
       

      
        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${state.user.userInfo.token}`
            }
        }
        

        const { data } = await axios.delete(
            `http://127.0.0.1:8000/api/company/deletework/${id}`,config
        );

        


     
        
       
        return data;

    } catch (error) {
        return error.message;
    }
});

