import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://frontend-test-assignment-api.abz.agency/api/v1';


export const getAllPositions = createAsyncThunk(
    'positions/getPositions',
    async (_, thunkAPI) => {
        try {
            const { data } = await axios.get('/positions');
            return data.positions;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        };
    }
);