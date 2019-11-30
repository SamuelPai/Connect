import axios from 'axios';

export default class activityAPI {
	static getActivity() {
		return axios.get(`/api/activities`);
	}

	// static postActivity() {
	// 	return axios.post(`/api/activities`)
	// }
}

