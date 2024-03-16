import { createSlice } from "@reduxjs/toolkit";
import { DummyProducts } from "../../pages/data";
const productSlice = createSlice({
    name : "Products",
    initialState : {value :DummyProducts}
}
) 