import { createSlice } from '@reduxjs/toolkit';

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState: [],
  reducers: {
    addToCheckout: (state, action) => {
      const item = state.find(item => item.id === action.payload.id);
      if (!item) state.push(...action.payload );
      
    },
    removeFromCheckout: (state, action) => {
      return []
    },
  },
});

export const { addToCheckout, removeFromCheckout } = checkoutSlice.actions;
export default checkoutSlice.reducer;
