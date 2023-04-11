import axios from 'axios';

const SERVER = process.env.REACT_APP_SERVER;

export const getEmployees = () => axios.post(`${SERVER}api/employee` + '', {});