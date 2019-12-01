import axios from 'axios';

export default class tripAPI {
	static getTrips() {
		return axios.get(`/api/trips`);
	}
	static getTripsById(tripId) {
		return axios.get(`/api/trips/${tripId}`);
	}

	static postTrips() {
		return axios.post(`/api/trips`)
	}
}

