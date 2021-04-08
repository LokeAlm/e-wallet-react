import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './Components/Cards/cardSlice';

const store = configureStore({
    reducer: {
        card: cardReducer
    }
});

export default store;