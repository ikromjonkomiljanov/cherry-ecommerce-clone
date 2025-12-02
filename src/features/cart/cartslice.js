import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    items2:[],
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item, index) => index !== action.payload);
    },
    addToWish: (state, action) => {
      state.items2.push(action.payload);
    },
    removeFromWish: (state, action) => {
      state.items2 = state.items2.filter((item, index) => index !== action.payload);
    },
  },
});

export const { addToCart ,removeFromCart, addToWish,removeFromWish} = cartSlice.actions;
export default cartSlice.reducer;

