import axios from 'axios';

const SERVER = process.env.REACT_APP_SERVER;

export const getCustomers = () => axios.post(`${SERVER}api/customer` + '', {});

export const getCustomer = (id) => axios.get(SERVER + 'api/customer/' + id);

export const updateCustomer = (id, body = {}) => axios.post(`${SERVER}api/customer/update/${id}`, body);
