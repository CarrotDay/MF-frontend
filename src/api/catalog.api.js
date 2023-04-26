import axios from 'axios';

const SERVER = process.env.REACT_APP_SERVER;

export const getCatalogWithBodys = (body = {}) => axios.post(`${SERVER}api/site/catalog/list`, body);