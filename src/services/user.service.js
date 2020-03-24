import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://api.tarabees.com/api/';

class UserService {
  getArticlesContent() {
    return axios.get(API_URL + 'admin/articles', { headers: authHeader() });


  }
  createArticles() {
    return axios.post(API_URL + 'admin/articles', { headers: authHeader() });


  }
  updateArticles() {
    return axios.put(API_URL + 'admin/articles/{article}', { headers: authHeader() });


  }
  deleteArticles() {
    return axios.delete(API_URL + 'admin/articles/{article}', { headers: authHeader() });


  }


  subscriptions() {
    return axios.get(API_URL + 'admin/customer-subscriptions', { headers: authHeader() });
  }

  subscriptionsadit() {
    return axios.get(API_URL + 'admin/customer-subscriptions/{subscription_id}/diets ', { headers: authHeader() });
  
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin/dashboard-statistics', { headers: authHeader() });
  }
  subscriptionsadit() {
    return axios.get(API_URL + 'admin/customer-subscriptions/{subscription_id}/diets ', { headers: authHeader() });
  
  }

}

export default new UserService();