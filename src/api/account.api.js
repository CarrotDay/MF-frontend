import axios from 'axios';

import './axios.config';

export const signInAPI = body => axios.post(`/api/account/sign-in` + '', body);