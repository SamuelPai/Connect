import axios from 'axios';

export default class tripAPI {
	static getTrips() {
		return axios.get(`/api/trips`);
	}
}