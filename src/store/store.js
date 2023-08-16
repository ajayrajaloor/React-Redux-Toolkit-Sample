import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";


const store = configureStore({ //this configureStore will return an object and it will have the property of reducer
    reducer:{
        cart: cartSlice,
        products: productSlice
    }
})

export default store;