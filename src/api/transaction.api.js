import axios from 'axios';

const SERVER = process.env.REACT_APP_SERVER;

export const getTransactions = () => axios.post(`${SERVER}api/transaction` + '', {});