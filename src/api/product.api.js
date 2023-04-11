import axios from 'axios';

const SERVER = process.env.REACT_APP_SERVER;

export const getProducts = () => axios.post(`${SERVER}api/product`, {});

export const getProductWithMeta = async (meta) => axios.get(`${SERVER}api/product/${meta}`);