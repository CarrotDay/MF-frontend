import axios from 'axios';

import './axios.config';

export const uploadFile = (table, body = {}) => axios.post(`/api/file/${table}`, body, {
  headers: {
    'accept': 'application/json',
    'Accept-Language': 'en-US,en;q=0.8',
    'Content-Type': `multipart/form-data; boundary=${body._boundary}`,
  }
});