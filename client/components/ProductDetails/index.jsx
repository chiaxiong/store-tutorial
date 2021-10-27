import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProdcutInfo } from '../../state/productSlice';
import ProductListings from './ProductListing';

import { selectProductInfo } from '../../state/selectors/product';

const ProductPage = () => {
  //select allows use to use the slice we're calling from the state tree
  const products = useSelector(selectProductInfo);
  //putting our data into the state
  const dispatch = useDispatch();
  console.log(products, 'from the front-end');

  //using useEffect when we want to render the data
  useEffect(() => {
    //dispatching the thunk and store it in our state
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
