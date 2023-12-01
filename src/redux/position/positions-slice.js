
import { createSlice } from '@reduxjs/toolkit';
import { getAllPositions} from './positions-thunk.js';
import { isAnyOf } from '@reduxjs/toolkit';

const actions = [getAllPositions];

const handleGetPositions = (state, action) => {
    state.items = action.payload;
};


export const positionsSlice = createSlice({
    name: 'positions',
    initialState:{
        items: [],
        isLoading: false,
        error: null
    },

    extraReducers: builder =>
        builder
            .addCase(getAllPositions.fulfilled, handleGetPositions)
            .addMatcher(
                isAnyOf(...actions.map(action => action.fulfilled)),
                state => {
                    state.isLoading = false;
                    state.error = null;
                }
            )
            .addMatcher(isAnyOf(...actions.map(action => action.pending)), state => {
                state.isLoading = true;
            })
            .addMatcher(
                isAnyOf(...actions.map(action => action.rejected)),
                (state, action) => {
                    state.isLoading = false;
                    state.error = action.payload;
                }
            ),

})