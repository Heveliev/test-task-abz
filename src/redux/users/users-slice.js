
import { createSlice } from '@reduxjs/toolkit';
import { getAllUsers,addUser} from './users-thunk.js';
import { isAnyOf } from '@reduxjs/toolkit';



const actions = [getAllUsers,addUser];

const handleGetAllUsers = (state, action) => {
    state.items.push(...action.payload.users);
    state.totalPages = action.payload.total_pages;
};

const handleAddUser= (state, action) => {
    state.userAddSuccess = action.payload;
};



export const usersSlice = createSlice({
    name: 'users',
    initialState:{
        items: [],
        totalPages:null,
        userAddSuccess: false,
        isLoading: false,
        error: null
    },

    extraReducers: builder =>
        builder
            .addCase(getAllUsers.fulfilled, handleGetAllUsers)
            .addCase(addUser.fulfilled, handleAddUser)
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