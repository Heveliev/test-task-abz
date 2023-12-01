import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";



export const getAllUsers = createAsyncThunk(
    'users/getUsers',
    async ({page = 1,count = 5,}, thunkAPI) => {
        try {
            const { data } = await axios.get(`/users?page=${page}&count=${count} `);
            const {users,total_pages} = data;
            return {users,total_pages};
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }

    }
);



export const addUser = createAsyncThunk(
    'users/addUsers',
    async ({ name, email, phone, position_id, photo }, thunkAPI) => {
        try {
            const {data} = await axios.post('/users', { name, email, phone, position_id, photo });
            return data.success;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
