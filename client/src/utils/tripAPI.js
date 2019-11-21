import axios from 'axios';

export default class tripAPI {
	static getTrips(trips) {
		console.log('getTrip', trips);
		return axios.get(`/api/trips`);
	}
}