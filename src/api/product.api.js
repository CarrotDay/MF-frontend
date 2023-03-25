import axios from 'axios';

const SERVER = process.env.REACT_APP_SERVER;

export const getProductWithMetaAPI = async (meta) => {
  const { data } = await axios.get(`${SERVER}api/product/${meta}`);

  return data;
};

export const getProductsAPI = async () => {
  const { data } = await axios.get(SERVER + 'api/product');
  

  return data['$values'];
};

export const getProductsWithBody = async (body) => {
  const { data } = await axios.post(SERVER + 'api/product', body);

  console.log(data['$values']);

  return data['$values'];
};