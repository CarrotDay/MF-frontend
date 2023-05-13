import axios from 'axios';

import './axios.config';

export const changePasswordEmployee = (id, body = {}) =>
  axios.post(
    `/api/employee/change-password/` + id, body,
    {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
    }
  );

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

export const getEmployee = (id) =>
  axios.get("api/employee/" + id, {
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("token")}`,
    },
  });

export const updateEmployee = (id, body = {}) =>
  axios.put(`/api/employee/update/${id}`, body, {
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("token")}`,
    },
  });
