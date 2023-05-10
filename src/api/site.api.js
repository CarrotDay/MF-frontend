import axios from 'axios';

const SERVER = process.env.REACT_APP_SERVER;

export const getCatalogAPI = async () => {
  const { data } = await axios.post(SERVER + 'api/site/catalog/list', {});

  return data;
};

export const getProductWithBody = async (body) => {
  const { data } = await axios.post(SERVER + 'api/product', body);

  return data;
};

export const getHeaderWithBody = async (body) => {
  const { data } = await axios.post(SERVER + 'api/site/header', body);

  return data;  
};

export const addHeader = async (body) => {
  const { data } = await axios.post(SERVER + 'api/site/header/create', body);

  return data;  
};

export const getContactApi = async () => {
  const { data } = await axios.get(SERVER + 'api/contact/list', {});

  return data;
};

export const signUpApi = (body = {}) => axios.post(`${SERVER}api/site/customer/sign-up`, body)