import axios from 'axios';

import './axios.config';

export const getEmployees = () => axios.post(`/api/employee` + '', {}, { 
  headers: {
    "Authorization" : `Bearer ${window.localStorage.getItem('token')}`
  } 
});

export const createEmployee = (body = {}) => axios.post(`/api/employee/create`, body, { 
  headers: {
    "Authorization" : `Bearer ${window.localStorage.getItem('token')}`
  } 
});
