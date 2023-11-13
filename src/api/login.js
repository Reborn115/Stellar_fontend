import api from './http';
export const reqLogin = (data) => api.post('/api/auth/login', data);
