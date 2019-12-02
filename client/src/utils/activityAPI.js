import axios from 'axios';

export default class activityAPI {
	static getActivity() {
		return axios.get(`/api/activities`);
	}
	static getById(id) {
		return axios.get(`/api/activities/${id}`);
	}

	// static postActivity() {
	// 	return axios.post(`/api/activities`)
	// }
}

