// src/services/auth.service.js
import axios from 'axios';
import AppStorage from "@/helpers/AppStorage"
const API_URL = 'http://api.tarabees.com/api/';

class AuthService {
  login(data) {
    return axios
      .post(API_URL + 'admin/login', data)
      .then(res=>this.responseAfterLogin(res))
      .catch(error=>{ return error })
  }
   responseAfterLogin(res){
        const access_token = res.data.access_token
        const user = res.data.user
        AppStorage.store(access_token,user)
        if ('User') {
            window.location = '/dashboard'
        } 
          
    
    }
    hasToken(){
        const storedToken = AppStorage.getToken();
        if(storedToken){
            return true;
        }
        return false;
    }
    loggedIn(){
        return this.hasToken()
    }
    logout(){
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('expiration');      
        window.location = '/dashboard/adminlogin'
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