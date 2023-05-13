import axios from 'axios';

import './axios.config';

export const getAnnounces = () => axios.get(`/api/announcement/list`, { 
  headers: {
    "Authorization" : `Bearer ${window.localStorage.getItem('token')}`
  } 
});