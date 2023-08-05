import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


export const login = createAsyncThunk('user/login', async ({ email, password }, { rejectWithValue }) => {
    console.log(email,password)
    try {
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.post(
            'http://127.0.0.1:8000/api/user/login/',
            { 'username': email, 'password': password },
            config
        );



     
        
        localStorage.setItem('userInfo', JSON.stringify(data));
    
        return data;

        

    } catch (error) {
        return rejectWithValue(error.message);
    }
});


export const profile = createAsyncThunk('user/profile', async (arg,{getState}) => {
    const state = getState();
    console.log(state)
    try {
        
       

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${state.user.userInfo.token}`
            }
        }

        const { data } = await axios.get(
            'http://127.0.0.1:8000/api/user/profile/',
          
            config
        );



     
        
        localStorage.setItem('userProfile', JSON.stringify(data));
        console.log('profile action')
        return data;

    } catch (error) {
        return error.message;
    }
});


export const logout = createAsyncThunk('user/profile', async (arg,{getState}) => {
   
        localStorage.removeItem('userInfo');
        localStorage.removeItem('userProfile')

});

const logoutUser = () => ({
    type: 'user/logout',
});
