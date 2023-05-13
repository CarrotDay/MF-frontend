import axios from 'axios';

import './axios.config';

export const getProducts = (body = {}) => axios.post(`/api/product`, body, { 
  headers: {
    "Authorization" : `Bearer ${window.localStorage.getItem('token')}`
  } 
});

export const getProductWithMeta = (meta) => axios.get(`/api/product/${meta}`, { 
  headers: {
    "Authorization" : `Bearer ${window.localStorage.getItem('token')}`
  } 
});

export const createProduct = (body = {}) => axios.post(`/api/product/create`, body, { 
  headers: {
    "Authorization" : `Bearer ${window.localStorage.getItem('token')}`
  } 
});

export const delProductWithMeta = (meta) => axios.delete(`/api/product/${meta}`, { 
  headers: {
    "Authorization" : `Bearer ${window.localStorage.getItem('token')}`
  } 
});

export const updateProduct = (meta, body = {}) => axios.post(`/api/product/update/${meta}`, body, { 
  headers: {
    "Authorization" : `Bearer ${window.localStorage.getItem('token')}`
  } 
});