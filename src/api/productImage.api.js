import axios from 'axios';

const SERVER = process.env.REACT_APP_SERVER;

export const updateProductImage = (id, body = {}) => axios.post(`${SERVER}api/productimage/update/${id}`, body);