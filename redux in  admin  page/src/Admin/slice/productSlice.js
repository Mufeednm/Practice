import { createSlice } from "@reduxjs/toolkit";
import { DummyProducts } from "../../pages/data";
const productSlice = createSlice({
    name : "Products",
    initialState : {value :DummyProducts},
    reducers: {
        productedit:(state,action)=>{
            state.value=action.payload
        },
        productremove:(state,action)=>{
             state.value.filter((value)=>value.id!==action.payload)
        }
    }
}
) 
export const {productedit,productremove}=productSlice.actions
export default productSlice.reducer