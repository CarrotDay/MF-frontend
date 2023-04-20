import axios from 'axios';

const SERVER = process.env.REACT_APP_SERVER;

export const signInAPI = body => axios.post(`${SERVER}api/account/sign-in` + '', body);