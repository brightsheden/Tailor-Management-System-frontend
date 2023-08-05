import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const listTailors = createAsyncThunk('tailor/list', async (arg,{getState}) => {
    const state = getState();
  
    try {
        
       

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${state.user.userInfo.token}`
            }
        }

        const { data } = await axios.get(
            'http://127.0.0.1:8000/api/company/tailors/',
          
            config
        );



     
        
       
        return data;

    } catch (error) {
        return error.message;
    }
});

export const registerTailor = createAsyncThunk('tailor/register', async ({name,email,password},{getState}) => {
    const state = getState();

    try {
        
       

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${state.user.userInfo.token}`
            }
        }

        const { data } = await axios.post(
            'http://127.0.0.1:8000/api/company/registertailor/',
          
            {
              name,email,password

            },
            config
        );

        


     
        
       
        return data;

    } catch (error) {
        return error.message;
    }
});


export const TailorById = createAsyncThunk('tailor/id',async (id,{getState}) => {
    const state = getState();


    try {
        
       

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${state.user.userInfo.token}`
            }
        }

        const { data } = await axios.get(
            `http://127.0.0.1:8000/api/company/gettailor/${id}`,

            config
        ); 
       
        return data;

    } catch (error) {
        return error.message;
    }
});


export const deleteTailor = createAsyncThunk('tailor/delete', async (id,{getState}) => {
    const state = getState();
   
    

    try {
        
       

      
        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${state.user.userInfo.token}`
            }
        }
        

        const { data } = await axios.delete(
            `http://127.0.0.1:8000/api/company/deletetailor/${id}`,config
        );

        


     
        
       
        return data;

    } catch (error) {
        return error.message;
    }
});
