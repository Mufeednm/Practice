import { createSlice } from "@reduxjs/toolkit";
import { DummyProducts } from "../../pages/data";
const productSlice = createSlice({
    name : "Products",
    initialState : {value :DummyProducts},
    reducers: {
        products:(state,action)=>{
            state.value=action.payload
        }
    }
}
) 
export const {products}=productSlice.actions
export default productSlice.reducer