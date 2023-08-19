// import { configureStore } from '@reduxjs/toolkit';

// // import cartReducers from './cartSliece'
// // import counterSlice from './counterSlice';
// // import cartCounter from './cartCounter';
// import cartAddSlice from './cartAddSlice';


// export default configureStore({
//   reducer: {
//     // cart:cartReducers,
//     // counter:counterSlice,
//     // counter1:cartCounter,
//     cart:cartAddSlice
//   },
// });

import { configureStore } from "@reduxjs/toolkit";
import cartAddSlice from "./cartAddSlice";

export default configureStore({
  reducer:{
    cart:cartAddSlice
  }
})