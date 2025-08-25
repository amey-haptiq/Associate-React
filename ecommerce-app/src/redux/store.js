import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice.js';
import wishlistReducer from './wishlistSlice.js'

import checkoutReducer from './checkoutSlice.js';
import orderReducer from './orderSlice.js';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist:wishlistReducer,
    checkout:checkoutReducer,
    order:orderReducer,
  },
});
