import axios from 'axios';

const SERVER = process.env.REACT_APP_SERVER;

export const getEmployees = () => axios.post(`${SERVER}api/employee` + '', {});

export const createEmployee = (body = {}) => axios.post(`${SERVER}api/employee/create`, body);
