import { createSlice } from '@reduxjs/toolkit'

export const CountSlice = createSlice({
  name: 'product',
  initialState: {
    carItem: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
  },
  reducers: {
    addtoCart: (state, action) => {
      
      let findproduct = state.carItem.findIndex((item)=>

          item.id == action.payload.id

      )
       if (findproduct !== -1) {

        state.carItem[findproduct].quntity += 1

        localStorage.setItem("cart",JSON.stringify(state.carItem))
        
       } else {
        
        state.carItem =[...state.carItem, action.payload]

        localStorage.setItem("cart", JSON.stringify(state.carItem))

       }

      

    },

    increment: (state, action)=>{
      
        state.carItem[action.payload].quntity += 1

        localStorage.setItem("cart", JSON.CountSlice(state.carItem))
    }
  
  },
})

export const { addtoCart, increment } = CountSlice.actions

export default CountSlice.reducer