import axios from 'axios';

const SERVER = process.env.REACT_APP_SERVER;

export const createCartApi = (body = {}) => axios.post(`${SERVER}api/cart/create`, body);