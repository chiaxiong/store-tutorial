import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProdcutInfo } from '../../state/productSlice';
import ProductListings from './ProductListing';

const ProductPage = () => {
  //{products} comes from our productSlice.js
  //if you have the Redux Toolkit you can also see 
  //the path how to get the state
  const { products } = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProdcutInfo());
  }, [dispatch]);

  return (
    <div>
      <h1>Product page</h1>
      {products.map((product) => (
        <ProductListings {...product} />
      ))}
    </div>
  );
};

export default ProductPage;
