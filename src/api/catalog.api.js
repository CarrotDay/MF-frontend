import axios from 'axios';

import './axios.config';

export const getCatalogWithBodys = (body = {}) => axios.post(`/api/site/catalog/list`, body, { 
  headers: {
    "Authorization" : `Bearer ${window.localStorage.getItem('token')}`
  } 
});