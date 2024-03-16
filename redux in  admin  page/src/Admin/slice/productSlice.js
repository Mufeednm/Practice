import { createSlice } from "@reduxjs/toolkit";
import { DummyProducts } from "../../pages/data";
const productSlice = createSlice({
    name : "Products",
    initialState : {value :DummyProducts},
    reducers: {
        productADD:(state,action)=>{
            state.value=action.payload
        }
    }
}
) 
export const {productADD}=productSlice.actions
export default productSlice.reducer