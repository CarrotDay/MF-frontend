import axios from 'axios';

const SERVER = process.env.REACT_APP_SERVER;

export const getCustomers = () => axios.post(`${SERVER}api/customer` + '', {});