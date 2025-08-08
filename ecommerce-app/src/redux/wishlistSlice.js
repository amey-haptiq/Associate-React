import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice=createSlice({
    name: 'wishlist',
    initialState:[],
    reducers:{
        addToWishlist:(state,action)=>{
            const item=state.find(item=>item.id===action.payload.id);
            if(!item){
                state.push({...action.payload});
            }

        },
        removeFromWishlist: (state,action)=>{
            const item = state.find(item=>item.id===action.payload.id);
            if(item){
               return state.filter(item=>item.id!==action.payload.id)
            }
            return state;
        },
    },
});
export const{addToWishlist,removeFromWishlist}=wishlistSlice.actions;
export default wishlistSlice.reducer;