import { createSelector } from '@reduxjs/toolkit';

export const selectProductState = ({ allProducts }) => allProducts.products;

export const selectProductInfo = createSelector(
  selectProductState,

  (state) => {
    return state;
  },
);
