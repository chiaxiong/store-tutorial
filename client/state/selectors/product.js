import { createSelector } from '@reduxjs/toolkit';

//we use a createSelector in the case we use it in multiple
//places and need to make changes to it

//1. create your variable
//2. pass in an parement called state, in this case we destructed
//3. we are essentially only grabbing the allProducts from the state tree
export const selectProductState = ({ allProducts }) => allProducts.products;

//1. create your variable
export const selectProductInfo = createSelector(
  //2. call you createSelector function
  //3. pass in your variable above as the first argument
  selectProductState,

  //4. pass in the state
  (state) => {
    console.log(state, 'our returned state');
    return state;
  },
);
