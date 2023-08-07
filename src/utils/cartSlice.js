import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
   name: "Cart", 
   initialState: {
      items:[],
   },
   reducers: {
      //state --> prev state, action --> data which is coming in 
      addItem: (state, action) => {
         state.items.push(action.payload)
      },
      removeItem: (state, action) => {
         state.items.pop(); //write your own logic to remove acc. to the scenario
      },
      clearCart: (state)=>{
         state.items = []
      }
   }
})

//export actions 
export const {addItem, removeItem, clearCart} = cartSlice.actions; 

//export slice 
export default cartSlice.reducer; 