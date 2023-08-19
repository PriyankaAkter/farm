import {createSlice} from '@reduxjs/toolkit'

const sliece = createSlice({
    name:'user',
    initialState:{
        name:'Priyanka',
        email:"priyanka@gmail.com"
    },
    reducers:{
        logOut:(state)=>{
            state.name=""
            state.email=""
        }
    }
})

export const {logOut} = sliece.actions

export default sliece.reducer