import axios from 'axios';


const API_URL = 'http://api.tarabees.com/api/';

class UserService {
  getArticlesContent() {
    return axios.get(API_URL + 'admin/articles', );


  }
  createArticles() {
    return axios.post(API_URL + 'admin/articles', );


  }
  updateArticles() {
    return axios.put(API_URL + 'admin/articles/{article}', );


  }
  deleteArticles() {
    return axios.delete(API_URL + 'admin/articles/{article}', );


  }


  subscriptions() {
    return axios.get(API_URL + 'admin/customer-subscriptions', );
  }

  subscriptionsadit() {
    return axios.get(API_URL + 'admin/customer-subscriptions/{subscription_id}/diets ', );
  
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', );
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin/dashboard-statistics', );
  }
  subscriptionsadit() {
    return axios.get(API_URL + 'admin/customer-subscriptions/{subscription_id}/diets ', );
  
  }

}

export default new UserService();