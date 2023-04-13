import axios from 'axios';

const SERVER = process.env.REACT_APP_SERVER;

export const getProducts = (body = {}) => axios.post(`${SERVER}api/product`, body);

export const getProductWithMeta = (meta) => axios.get(`${SERVER}api/product/${meta}`);