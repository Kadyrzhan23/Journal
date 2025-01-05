import { configureStore } from "@reduxjs/toolkit";
import post from './slices/postSlice'
import service from './slices/service'
export const store = configureStore({
    reducer:{
        post,
        service
    }
})