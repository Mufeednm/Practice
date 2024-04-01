import { createSlice } from "@reduxjs/toolkit";
 const colorSlice = createSlice({
    name : "color",
    initialState:{value:"red"},
    reducers : {
        colorchange:(state,action)=>{
            state.value=action
        }
    }
 })
 export const {colorchange}=colorSlice.actions
 export default colorSlice.reducer