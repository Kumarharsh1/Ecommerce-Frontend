import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {
    productListRequest: (state) => {
      state.loading = true;
    },
    productListSuccess: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    productListFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { productListRequest, productListSuccess, productListFail } = productSlice.actions;
export default productSlice.reducer;