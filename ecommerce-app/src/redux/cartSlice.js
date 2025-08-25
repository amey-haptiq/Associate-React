import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const item = state.find(item => item.id === action.payload.id);
      if (!item) state.push({ ...action.payload, quantity: 1 });
      else item.quantity++;
    },
    removeFromCart: (state, action) => {
      return state.filter(item => item.id !== action.payload.id);
    },
    removeCart:(state,action)=>{
      return []
    }
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
