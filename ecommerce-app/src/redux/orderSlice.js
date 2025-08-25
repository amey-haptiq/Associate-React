import { createSlice } from '@reduxjs/toolkit'

const orderSlice = createSlice({
  name: 'order',
  initialState: [],
  reducers: {
    addToOrder: (state, action) => {
      
      if (Array.isArray(action.payload)) {
        state.push(action.payload)
      } else {
        
        state.push([action.payload])
      }
    },
  },
})

export const { addToOrder } = orderSlice.actions
export default orderSlice.reducer
