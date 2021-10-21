import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";


export const store = configureStore({
  reducer: {
    //This is where reducers are added
    // counter: counterReducer,
    allProducts: productReducer,
  },
})


