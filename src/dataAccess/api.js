import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0',
  headers: { 'API-KEY': process.env.REACT_APP_API_KEY },
  withCredentials: true,
});

const authAPI = {
  async authMe() {
    return await instance.get('/auth/me');
  },
};

export { authAPI };
