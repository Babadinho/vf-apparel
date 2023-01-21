import axios from 'axios';

export const getProducts = async () =>
  await axios.get('https://efuktshirts.com/products.json');
