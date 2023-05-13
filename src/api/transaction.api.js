import axios from 'axios';

import './axios.config';

export const getTransactions = (body = {}) => axios.post(`/api/transaction`, body, { 
  headers: {
    "Authorization" : `Bearer ${window.localStorage.getItem('token')}`
  } 
});

export const getTransactionsByMeta = (meta) => axios.get(`/api/transaction/${meta}`, { 
  headers: {
    "Authorization" : `Bearer ${window.localStorage.getItem('token')}`
  } 
});

export const createTransaction = (body = {}) => axios.post(`/api/transaction/create`, body, { 
  headers: {
    "Authorization" : `Bearer ${window.localStorage.getItem('token')}`
  } 
});

export const updateTransaction = (id, body = {}) => axios.put(`/api/transaction/update/${id}`, body, { 
  headers: {
    "Authorization" : `Bearer ${window.localStorage.getItem('token')}`
  } 
});