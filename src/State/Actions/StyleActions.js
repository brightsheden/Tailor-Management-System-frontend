import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const listStyles = createAsyncThunk('style/list', async (arg,{getState}) => {
    const state = getState();
  
    try {
        
       

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${state.user.userInfo.token}`
            }
        }

        const { data } = await axios.get(
            'http://127.0.0.1:8000/api/company/styles/',
          
            config
        );



     
        
       
        return data;

    } catch (error) {
        return error.message;
    }
});


export const deleteStyle = createAsyncThunk('style/delete', async (id,{getState}) => {
    const state = getState();
    try {
        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${state.user.userInfo.token}`
            }
        }
        const { data } = await axios.delete(
            `http://127.0.0.1:8000/api/company/deletestyle/${id}`,config
        ); 
        return data;

    } catch (error) {
        return error.message;
    }
});


export const addStyle = createAsyncThunk('style/create', async ({image,gender,description},{getState}) => {
    const state = getState();

    try {
        
       

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${state.user.userInfo.token}`
            }
        }

        const formData = new FormData()
        formData.append('image',image)
        formData.append('description',description)
        formData.append('gender',gender)
        console.log(image)
  
        

        const { data } = await axios.post(
            'http://127.0.0.1:8000/api/company/stylecreate/',
        
            config
        );

        


     
        
       
        return data;

    } catch (error) {
        return error.message;
    }
});

export const editStyle = createAsyncThunk('style/edit', async (style,{getState}) => {
    const state = getState();
    

    try {
        
       

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${state.user.userInfo.token}`
            }
        }

        const { data } = await axios.put(
            `http://127.0.0.1:8000/api/company/styleupdate/${style._id}`,
            {
               "image":style.image,
               "description":style.description,
               "gender":style.gender

            },
            
            config
        );

        


     
        
       
        return data;

    } catch (error) {
        return error.message;
    }
});