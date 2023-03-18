import axios from 'axios';

const SERVER = process.env.REACT_APP_SERVER;

export const getProductAPI = async () => {
  const { data } = await axios.get(SERVER + 'api/product');

  return data['$values'];
};

export const getProductWithBody = async (body) => {
  const { data } = await axios.post(SERVER + 'api/product', body);

  return data['$values'];
};