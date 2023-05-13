import axios from 'axios';

import './axios.config';

export const updateProductImage = (id, body = {}) => axios.post(`/api/productimage/update/${id}`, body, { 
  headers: {
    "Authorization" : `Bearer ${window.localStorage.getItem('token')}`
  } 
});