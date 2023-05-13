import axios from 'axios';

import './axios.config';

export const getCustomers = () => axios.post(`/api/customer` + '', {}, { 
  headers: {
    "Authorization" : `Bearer ${window.localStorage.getItem('token')}`
  } 
});

export const getCustomer = (id) => axios.get('api/customer/' + id, { 
  headers: {
    "Authorization" : `Bearer ${window.localStorage.getItem('token')}`
  } 
});

export const updateCustomer = (id, body = {}) => axios.post(`/api/customer/update/${id}`, body, { 
  headers: {
    "Authorization" : `Bearer ${window.localStorage.getItem('token')}`
  } 
});
