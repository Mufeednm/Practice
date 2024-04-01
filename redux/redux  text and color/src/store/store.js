import { configureStore } from "@reduxjs/toolkit";
import colorSlice from "../slice/colorSlice";
import countSlice from "../slice/countSlice";
export const store = configureStore({
    reducer:{
        color : colorSlice,
        count : countSlice
    }
})