import axios from 'axios';

const SERVER = process.env.REACT_APP_SERVER;

export const getTransactions = () => axios.post(`${SERVER}api/transaction` + '', {});

export const getTransactionsByMeta = (meta) => axios.get(`${SERVER}api/transaction/${meta}`);

export const createTransaction = (body = {}) => axios.post(`${SERVER}api/transaction/create`, body);
