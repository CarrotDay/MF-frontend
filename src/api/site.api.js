import axios from 'axios';

import './axios.config';

export const getCatalogAPI = async () => {
  const { data } = await axios.post('/api/site/catalog/list', {});

  return data;
};

export const getProductWithBody = async (body) => {
  const { data } = await axios.post('/api/product', body);

  return data;
};

export const getHeaderWithBody = async (body) => {
  const { data } = await axios.post('/api/site/header', body);

  return data;  
};

export const addHeader = async (body) => {
  const { data } = await axios.post('/api/site/header/create', body, { 
    headers: {
      "Authorization" : `Bearer ${window.localStorage.getItem('token')}`
    } 
  });

  return data;  
};

export const getContactApi = async () => {
  const { data } = await axios.get('/api/contact/list', {}, { 
    headers: {
      "Authorization" : `Bearer ${window.localStorage.getItem('token')}`
    } 
  });

  return data;
};

export const signUpApi = (body = {}) => axios.post(`/api/site/customer/sign-up`, body, { 
  headers: {
    "Authorization" : `Bearer ${window.localStorage.getItem('token')}`
  } 
});