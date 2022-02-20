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

  async login({ email, password, rememberMe, captcha }) {
    return await instance.post('/auth/login', {
      email,
      password,
      rememberMe,
      captcha,
    });
  },

  async logout() {
    return await instance.delete('/auth/login')
  }
};

const securityAPI = {
  async getCaptchaUrl() {
    return await instance.get('/security/get-captcha-url')
  }
}

export { authAPI, securityAPI };
