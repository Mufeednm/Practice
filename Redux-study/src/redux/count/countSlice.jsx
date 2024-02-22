import { createSlice } from "@reduxjs/toolkit";
export  const countSlice = createSlice({
    name : "count",
    initialState :{
        value :2
    },
    reducers:{
        incerese_count : (state)=>{
            state.value+=1
        },
        decerese_count : (state)=>{
            state.value-=1
        },
    }

})
export const {incerese_count,decerese_count}=countSlice.actions
export default   countSlice.reducer
