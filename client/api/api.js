import axios from 'axios';

//creating an axios instance for main domain URL
export const api = axios.create({
  baseURL: 'https://fakestoreapi.com/',
});

//different endpoints
export const ENDPOINTS = {
  PRODUCTS: 'products',
};

//fetching data from the url
export const fetchProducts = async () => {
  try {
    //don't need to include the baseURL since the
    //axios instance will auto add the domain
    const { data } = await api.get(`${ENDPOINTS.PRODUCTS}`); //fetching our data
    // console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};
