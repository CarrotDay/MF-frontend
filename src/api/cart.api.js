import axios from 'axios';

import './axios.config';

export const getCarts = (body = {}) => axios.post(`/api/cart`, body, { 
  headers: {
    "Authorization" : `Bearer ${window.localStorage.getItem('token')}`
  } 
});

export const createCart = (body = {}) => axios.post(`/api/cart/create`, body, { 
  headers: {
    "Authorization" : `Bearer ${window.localStorage.getItem('token')}`
  } 
});

export const removeCart = (id) => axios.delete(`/api/cart/remove/${id}`, { 
  headers: {
    "Authorization" : `Bearer ${window.localStorage.getItem('token')}`
  } 
});