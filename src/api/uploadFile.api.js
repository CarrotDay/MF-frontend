import axios from 'axios';

const SERVER = process.env.REACT_APP_SERVER;

export const uploadFile = (table, body = {}) => axios.post(`${SERVER}api/file/${table}`, body, {
  headers: {
    'accept': 'application/json',
    'Accept-Language': 'en-US,en;q=0.8',
    'Content-Type': `multipart/form-data; boundary=${body._boundary}`,
  }
});