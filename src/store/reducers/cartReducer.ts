import ProductData from '../../interfaces/ProductData';
import { createSlice } from '@reduxjs/toolkit';

interface CartState {
  items: ProductData[];
  itemCount: number;
  totalCost: number;
}

const initialState: CartState = {
  items: [],
  itemCount: 0,
  totalCost: 0,
};

// createSlice function takes care of setting up the action types and handling the default case. Alternative to writing the action types and case manually
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: { payload: ProductData }) => {
      const { payload } = action;
      const existingItem = state.items.find((item) => item.id === payload.id);

      if (existingItem) {
        existingItem.quantity += 1;
        state.totalCost += parseFloat(payload.variants[0].price);
      } else {
        state.items.push({ ...payload, quantity: 1 });
        state.itemCount += 1;
        state.totalCost += parseFloat(payload.variants[0].price);
      }
    },
    removeFromCart: (state, action) => {
      const { payload } = action;
      return {
        ...state,
        items: state.items.filter((item) => item.id !== payload.id),
        itemCount: state.itemCount - 1,
        totalCost:
          state.totalCost -
          parseFloat(payload.variants[0].price) * payload.quantity,
      };
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
