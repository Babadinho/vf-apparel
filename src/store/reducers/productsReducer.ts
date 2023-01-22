import ProductData from '../../interfaces/ProductData';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProductsState {
  data: ProductData[];
  status: 'idle' | 'loading' | 'success' | 'error';
  error: string | null;
}

const initialState: ProductsState = {
  data: [],
  status: 'idle',
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<ProductData[]>) => {
      state.data = action.payload;
      state.status = 'success';
    },
  },
});

export const { setData } = productsSlice.actions;

export default productsSlice.reducer;
