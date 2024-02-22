import { configureStore } from "@reduxjs/toolkit";
import colorReducer from  "./colour/colorSlice"
export default configureStore({
  reducer : {
    color : colorReducer
  }
})