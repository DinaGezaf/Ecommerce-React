import { configureStore } from "@reduxjs/toolkit";
import  ProductReducer  from "./Reducers/Product-Reducer";
import  CartReducer  from "./Reducers/Cart-Reducer";

export const store = configureStore({
  reducer: {
    product: ProductReducer,
    cart: CartReducer,
  },
});
