import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProdcutInfo } from '../../state/productSlice';
import ProductListings from './ProductListing';

import { selectProductInfo } from '../../state/selectors/product';

const ProductPage = () => {
  //{products} comes from our productSlice.js
  //if you have the Redux Toolkit you can also see
  //the path how to get the state
  const products = useSelector(selectProductInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProdcutInfo());
  }, [dispatch]);

  return (
    <div>
      <h1>Product page</h1>
      {products &&
        products.map((product) => (
          <ProductListings {...product} key={product.id} />
        ))}
    </div>
  );
};

export default ProductPage;
