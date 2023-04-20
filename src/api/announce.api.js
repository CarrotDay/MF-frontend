import axios from 'axios';

const SERVER = process.env.REACT_APP_SERVER;

export const getAnnounces = () => axios.get(`${SERVER}api/announcement/list`);