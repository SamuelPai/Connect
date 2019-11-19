import axios from 'axios';

export default class tripAPI {
	static getCheeseById(cheeseId) {
		console.log('getCheeseById(cheeseId)', cheeseId);
		return axios.get(`/api/cheese/${cheeseId}`);
	}
}