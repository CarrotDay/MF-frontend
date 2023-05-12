import axios from 'axios';

const SERVER = process.env.REACT_APP_SERVER;

export const getCarts = (body = {}) => axios.post(`${SERVER}api/cart`, body);

export const createCart = (body = {}) => axios.post(`${SERVER}api/cart/create`, body);

export const removeCart = (id) => axios.delete(`${SERVER}api/cart/remove/${id}`);