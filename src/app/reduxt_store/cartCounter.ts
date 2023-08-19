import { createSlice } from "@reduxjs/toolkit";

const cartCounter = createSlice({
    name:"cartCount",
    initialState:1,
    reducers:{
        incrementCounter:(state)=>{
           return state = state + 1
        },
        decrementCounter:(state)=>{
           return state = state - 1
        }
    }
})

export const { incrementCounter,decrementCounter } = cartCounter.actions
export default cartCounter.reducer