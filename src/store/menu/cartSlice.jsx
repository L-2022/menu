
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    quantities: {},
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        increaseQuantity: (state, action) => {
            const id = action.payload;
            state.quantities[id] = (state.quantities[id] || 0) + 1;
        },
        decreaseQuantity: (state, action) => {
            const id = action.payload;
            const current = state.quantities[id] || 0;
            state.quantities[id] = current > 1 ? current - 1 : 0;
        },
        resetCart: (state) => {
            state.quantities = {};
        },
        clearCart: (state) => {
            state.quantities = {};
        }

    },
});

export const { increaseQuantity, decreaseQuantity, resetCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
