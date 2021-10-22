import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from '../api/api';
import axios from 'axios';

const initialState = {
  products: [],
};

export const fetchProdcutInfo = createAsyncThunk(
  'product/fetchProdcutInfo',
  async (dispatch, getState) => {
    //this is where we are including our api call
    return await fetch('https://fakestoreapi.com/products').then((res) =>
      res.json(),
    );
  },
);

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts: (state, { payload }) => {
      state.products = payload;
    },
  },
  //performing other reducers functionality that is part of RTK
  extraReducers: {
    [fetchProdcutInfo.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchProdcutInfo.fulfilled]: (state, action) => {
      state.status = 'sucess';
      state.products = action.payload;
    },
    [fetchProdcutInfo.rejected]: (state, action) => {
      state.status = 'fail';
    },
  },
});

export const { setProducts } = productSlice.actions;

export default productSlice.reducer;
