import axios from 'axios';

const SERVER = process.env.REACT_APP_SERVER;

export const getCatalogAPI = async () => {
  const { data } = await axios.post(SERVER + 'api/site/catalog/list', {});

  return data['$values'];
};

export const getProductWithBody = async (body) => {
  const { data } = await axios.post(SERVER + 'api/product', body);

  return data['$values'];
};