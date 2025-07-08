import { configureStore } from '@reduxjs/toolkit';
import selectedServicesReducer from './services/servicesSlice.js';
import cartReducer from './menu/cartSlice';

export const store = configureStore({
    reducer: {
        selectedServices: selectedServicesReducer,
        cart: cartReducer,
    },
});
