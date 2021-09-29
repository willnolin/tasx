import api from './api'

export const loginUser = async (userData) => {
  try {
    const res = await api.post('auth/login', { authentication: userData })
    localStorage.setItem('authToken', res.data.token)
    api.defaults.headers.common.authorization = `Bearer ${res.data.token}`;
    return res.data.user;
  } catch (error) {
    console.log(error);
  }
}

export const registerUser = async (registerData) => {
  try {
    const resp = await api.post('/users', { user: registerData });
    localStorage.setItem('authToken', resp.data.token);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
    return resp.data.user;
  } catch (error) {
    console.log(error)
    return {error: error}
  }
};

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const resp = await api.get('/auth/verify');
    return resp.data;
  }
  return null;
};

export const removeToken = () => {
  api.defaults.headers.common.authorization = null;
};