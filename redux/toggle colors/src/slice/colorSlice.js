import { createSlice } from "@reduxjs/toolkit";
const colorslice =  createSlice({
 name : "color",
 initialState: {value : "brown"},
 reducers :{
    changecolor :(state,action)=>{
        state.value=action.payload
    }
 }
})
export const {changecolor}=colorslice.actions
export default colorslice.reducer