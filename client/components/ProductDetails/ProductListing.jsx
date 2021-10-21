import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../api/api";

const ProductListings = () => {
  // {products} comes from our store.js
  const { products } = useSelector((state) => state.allProducts);
  const { id, title, category } = products[0];
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProducts(products);
  }, []);

  return (
    <div>
      {products.map((product) => {
        console.log("our product", product);
        <h1>{product.title}</h1>;
      })}
    </div>
  );
};

export default ProductListings;
