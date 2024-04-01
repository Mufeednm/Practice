import { createSlice } from "@reduxjs/toolkit";
const countSlice= createSlice({
    name:"count",
    initialState:{count:0},
    reducers :{
        incre :(state,action)=>{
            state.count=state.count+1
        },
        decre : (state,action)=>{
            state.count=state.count-1
        }

    }
})
export const {incre,decre}=countSlice.actions
export default countSlice.reducer