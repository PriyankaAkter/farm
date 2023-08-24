// const localItems = localStorage.getItem("cart");
// console.log({ localItems });

import { createSlice } from "@reduxjs/toolkit";
import { products } from "../(website)/components/views/home/data";
const slice = createSlice({
  name: "cart",
  initialState: {
    products: [],
  },
  reducers: {
    // addCart: (state, action) => {
    //   const isExist = state.products.find((product)=>product.id===action.payload.id)
    //   if(!isExist){
    //     state.products.push(action.payload);
    //   }

    // },
    addCart: (state, action) => {
      const isExist = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (!isExist) {
        state.products.push(action.payload);
        if (!localStorage.getItem("cart")) {
          localStorage.setItem("cart", JSON.stringify([action.payload]));
        } else {
          localStorage.setItem("cart", JSON.stringify(state.products));
        }
      }
    },

    removeCart: (state, action) => {
      const findId = state.products.findIndex(
        (product) => product.id === action.payload
      );
      if (findId !== -1) {
        state.products.splice(findId, 1);
        localStorage.setItem("cart", JSON.stringify(state.products));
      }
    },
    addQuantity: (state, action) => {
      const findId = state.products.findIndex(
        (product) => product.id === action.payload
      );
      if (findId !== -1) {
        const productQuantity = state.products[findId];
        productQuantity["quantity"] = productQuantity["quantity"] + 1;
        state.products[findId] = productQuantity;
        localStorage.setItem("cart", JSON.stringify(state.products));
      }
    },
    decrementQuantity: (state, action) => {
      const findId = state.products.findIndex(
        (product) => product.id === action.payload
      );
      if (findId !== -1) {
        const productQuantity = state.products[findId];
        productQuantity["quantity"] = productQuantity["quantity"] - 1;
        state.products[findId] = productQuantity;
        localStorage.setItem("cart", JSON.stringify(state.products));
      }
    },
  },
});
export const { addCart, removeCart, addQuantity, decrementQuantity } =
  slice.actions;
export default slice.reducer;
