import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProdcutInfo } from '../../state/productSlice';

const ProductListings = () => {
  // {products} comes from our store.js
  const { products } = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProdcutInfo());
  }, []);

  return (
    <div>
      Product listing
      {products.map((product) => (
        <h3>{product.title}</h3>
      ))}
    </div>
  );
};

export default ProductListings;
