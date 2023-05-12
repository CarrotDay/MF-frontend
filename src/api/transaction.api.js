import axios from 'axios';

const SERVER = process.env.REACT_APP_SERVER;

export const getTransactions = (body = {}) => axios.post(`${SERVER}api/transaction`, body);

export const getTransactionsByMeta = (meta) => axios.get(`${SERVER}api/transaction/${meta}`);

export const createTransaction = (body = {}) => axios.post(`${SERVER}api/transaction/create`, body);

export const updateTransaction = (id, body = {}) => axios.put(`${SERVER}api/transaction/update/${id}`, body);