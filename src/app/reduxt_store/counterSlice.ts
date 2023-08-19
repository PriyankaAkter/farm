import {PayloadAction, createSlice} from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name:'counter',
    initialState:5,
    reducers:{
        incrementFunction:(state) =>{
            return state = state + 1;
        },
        descrementFunction:(state)=>{
            return state = state - 1
        }
    }
})

export const {incrementFunction,descrementFunction} = counterSlice.actions

export default counterSlice.reducer