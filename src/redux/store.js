import { configureStore } from '@reduxjs/toolkit';

import {positionsSlice} from "./position";
import {usersSlice} from "./users/index.js";

export const store = configureStore({
    reducer: {
        positions:positionsSlice.reducer,
        users:usersSlice.reducer,
    }})