import axios from 'axios';

export default class tripAPI {
	static getTrips() {
		return axios.get(`/api/trips`);
	}

	static postTrips() {
		return axios.post(`/api/trips`)
	}
}

