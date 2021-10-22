import { createSelector } from '@reduxjs/toolkit';

//we use a createSelector in the case we use it in multiple
//places and need to make changes to it

//1. create your variable
//2. pass in your state, in this case we destructed
//3. grab the info from you Redux tree
export const selectProductState = ({ allProducts }) => allProducts.products;

//1. create your variable
//2. call you createSelector function
//3. pass in your variable above as the first argument
//4. pass in the state
export const selectProductInfo = createSelector(
  selectProductState,

  (state) => {
    return state;
  },
);
