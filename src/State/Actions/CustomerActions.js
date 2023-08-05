import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const listCustomers = createAsyncThunk('customer/list', async (arg,{getState}) => {
    const state = getState();
  
    try {

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${state.user.userInfo.token}`
            }
        }

        const { data } = await axios.get(
            'http://127.0.0.1:8000/api/company/customers/',
          
            config
        );   
        return data;

    } catch (error) {
        return error.message;
    }
});


export const customerById = createAsyncThunk('customer/id',async (id,{getState}) => {
    const state = getState();


    try {
        
       

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${state.user.userInfo.token}`
            }
        }

        const { data } = await axios.get(
            `http://127.0.0.1:8000/api/company/customer/${id}`,

            config
        ); 
       
        return data;

    } catch (error) {
        return error.message;
    }
});


export const deleteCustomer = createAsyncThunk('Customer/delete', async (id,{getState}) => {
    const state = getState();
   
    

    try {
        
       

      
        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${state.user.userInfo.token}`
            }
        }
        

        const { data } = await axios.delete(
            `http://127.0.0.1:8000/api/company/deletecustomer/${id}`,config
        );

        


     
        
       
        return data;

    } catch (error) {
        return error.message;
    }
});


export const registerCustomer = createAsyncThunk('customer/register', async ({name,email,password,phone,address},{getState}) => {
    const state = getState();

    try {
        
       

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${state.user.userInfo.token}`
            }
        }

        const { data } = await axios.post(
            'http://127.0.0.1:8000/api/company/registercustomer/',
          
            {
              name,email,password,phone,address

            },
            config
        );
        return data;

    } catch (error) {
        return error.message;
    }
});

