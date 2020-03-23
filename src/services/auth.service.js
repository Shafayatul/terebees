// src/services/auth.service.js
import axios from 'axios';

const API_URL = 'http://api.tarabees.com/api/';

class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'admin/login', {
        username: user.username,
        password: user.password
      })
      .then(response => {
        
        localStorage.setItem('token',response.data.access_token)
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    return axios.post(API_URL + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password
    });
  }
}

export default new AuthService();