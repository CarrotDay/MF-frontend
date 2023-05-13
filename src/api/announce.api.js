import axios from 'axios';

import './axios.config';

export const getAnnounce = (meta) => axios.get(`/api/announcement/${meta}`, { 
  headers: {
    "Authorization" : `Bearer ${window.localStorage.getItem('token')}`
  } 
});

export const getAnnounces = () => axios.get(`/api/announcement/list`, { 
  headers: {
    "Authorization" : `Bearer ${window.localStorage.getItem('token')}`
  } 
});

export const removeAnnounce = (meta) => axios.delete(`https://localhost:7114/api/announcement/remove/${meta}`, { 
  headers: {
    "Authorization" : `Bearer ${window.localStorage.getItem('token')}`
  } 
});

export const createAnnounce = (body = {}) => axios.post(`https://localhost:7114/api/announcement/create`, body, { 
  headers: {
    "Authorization" : `Bearer ${window.localStorage.getItem('token')}`
  } 
});

export const updateAnnouce = (meta, body = {}) => axios.put(`https://localhost:7114/api/announcement/update`, body, { 
  headers: {
    "Authorization" : `Bearer ${window.localStorage.getItem('token')}`
  } 
})