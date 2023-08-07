import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

//this obj has slices
const store = configureStore({
   reducer: {
      cart: cartSlice
   }
}); 

export default store; 

