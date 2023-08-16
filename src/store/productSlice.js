import { createSlice } from "@reduxjs/toolkit";


const initialState = { //using the object here because to handle all the aspect of api call like it is not only always returning datas, it can be error or other state of slice
    data : [],
}

const productSlice = createSlice({
    name : 'products',
    initialState,
    reducers:{
        fetchProducts(state,action){
            state.data = action.payload
       }
    }
})


export const {fetchProducts} = productSlice.actions;
export default productSlice.reducer;

export  function getProducts() {
    return async function getProductsThunk(dispatch,getState){
        const data = await fetch("https://fakestoreapi.com/products")
        const result = await data.json()
        console.log(result,'ppppppppp');
      dispatch(fetchProducts(result))
    }
}


