import axios from 'axios';

import './axios.config';

export const getContact = () => axios.get(`/api/contact/list`);

export const updateContact = (id, body = {}) => axios.put(`/api/contact/update/${id}`, body, { 
  headers: {
    "Authorization" : `Bearer ${window.localStorage.getItem('token')}`
  } 
});