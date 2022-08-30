import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    totalCount: 0,
    productsList: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addProductToCart: (state, actions) => {
          state.productsList = [...state.productsList, actions.payload];
          state.totalCount +=1  
        },
        removeProductFromCart: (state, actions) => {
            const productId = actions.payload;
            state.totalCount -=1; 
            state.productsList = state.productsList.filter(product => product.id !== productId);
          }
    }    
});

//Actions creator are generated for each case reducer function
export const { addProductToCart, removeProductFromCart } = cartSlice.actions;

export default cartSlice.reducer;