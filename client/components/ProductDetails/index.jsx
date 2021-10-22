import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProdcutInfo } from '../../state/productSlice';
import ProductListings from './ProductListing';

const ProductPage = () => {
  // {products} comes from our store.js
  const { products } = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();

  console.log(products);

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
