import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      title: "strawberry",
      category: "fruits",
    },
  ],
};

export const getProducts = createAsyncThunk(
  'product/getProducts',
  async() =>{
    return 
  }
)

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, { payload }) => {
      state;
    },
  },
});

export const { setProducts } = productSlice.actions;

export default productSlice.reducer;
