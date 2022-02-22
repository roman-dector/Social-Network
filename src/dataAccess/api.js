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
    return await instance.delete('/auth/login');
  },
};

const securityAPI = {
  async getCaptchaUrl() {
    return await instance.get('/security/get-captcha-url');
  },
};

const profileAPI = {
  async getUserProfileInfo(userId) {
    return await instance.get(`/profile/${userId}`);
  },

  async getUserStatus(userId) {
    return await instance.get(`/profile/status/${userId}`);
  },

  async updateLoggedUserInfo(userInfo) {
    return await instance.put('/profile', userInfo);
  },

  async updateLoggedUserStatus(status) {
    return await instance.put('/profile/status', { status });
  },

  async updateLoggedUserPhoto(image) {
    let formData = new FormData();
    formData.append('image', image);
    return await instance.put('/profile/photo', formData);
  },
};

export { authAPI, securityAPI, profileAPI };
