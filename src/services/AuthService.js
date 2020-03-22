// src/services/AuthService.js

import axios from 'axios';

const url = 'http://api.tarabees.com//api/';

export default {
	login(credentials) {
		return axios.post(url + 'customer/login', credentials)
			.then(response => response.data);
	},
	signUp(credentials) {
		return axios
			.post(url + 'customer/signup', credentials)
			.then(response => response.data);
	},
	articles() {
		return axios.get(url + 'articles', )
		.then(response => {this.articles = response.data.articles});
    },
    questions() {
		return axios.get(url + 'questions').then(response => response.data);
	}
};