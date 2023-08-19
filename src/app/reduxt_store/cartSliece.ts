// import {createSlice} from '@reduxjs/toolkit'


// const sliece = createSlice({
//     name:'cart',
//     initialState:{
//         products:[]
//     },
//     reducers:{
//         addCart:(state,action)=>{
//             const isExit = state.products.find(product =>product.id===action.payload.id)
//             if(!isExit){
//                 state.products.push(action.payload)
//             }
            
//         },
//         // addCartMultiple:(state,action)=>{
//         //     state.products =[...state.products,...action.payload]
//         // },
//         removeCart:(state,action)=>{
//             const findIndex = state.products.findIndex(product=> product.id===action.payload)
//             if(findIndex!==-1){
//                 state.products.splice(findIndex,1)
//             }
            
//         },
//         incrementQuantity:(state,actions) =>{
//             const findIndex = state.products.findIndex(product=> product.id===actions.payload)
       
            
//             if(findIndex !== -1){
//                let product = state.products[findIndex];
//                product["quantity"] = product.quantity + 1;
//                state.products[findIndex] = product
//             }
//         },
//         decrementQuantity:(state,actions) =>{
//             const findIndex1 = state.products.findIndex(product=> product.id===actions.payload)
       
            
//             if(findIndex1 !== -1){
//                let product = state.products[findIndex1];
//                product["quantity"] = product.quantity - 1;
//                state.products[findIndex1] = product
//             }
//         }
//     }
// })

// export const {addCart,incrementQuantity,decrementQuantity,removeCart} = sliece.actions

// export default sliece.reducer


// import { createSlice } from "@reduxjs/toolkit";
// const cartSlice = createSlice({
//     name:"cart",
//     initialState:{
//         products:[]
//     },
//     reducers:{
//         addCart:(state,action)=>{
//             const isExist = state.products.find((product)=>product.id===action.payload.id)
//             if(!isExist){
//                 state.products.push(action.payload)
//             }
            
//         },
//          addCartMultiple:(state,action)=>{
//   state.products =[...state.products,...action.payload]
// },
//         removeCart:(state,action)=>{
//            const findIndex = state.products.findIndex((product)=>product.id===action.payload)
//            if(findIndex!==-1){
//             state.products.splice(findIndex,1)
//            }
//         },
//         incrementQuantity:(state,action)=>{
//            const findIndex = state.products.findIndex((product)=>product.id===action.payload)
//            if(findIndex!==-1){
//             const product = state.products[findIndex]
//             product.quantity = product.quantity + 1
//             state.products[findIndex] = product
//            }
//         },
//         decremwntQuantity:(state,action)=>{
//             const findIndex = state.products.findIndex((product)=>product.id===action.payload)
//             if(findIndex!==-1){
//              const product = state.products[findIndex]
//              product.quantity = product.quantity - 1
//              state.products[findIndex] = product
//             }
//          }
//     }
// })
//  export const {addCart,removeCart,incrementQuantity,decremwntQuantity,addCartMultiple} = cartSlice.actions
//  export default cartSlice.reducer