import { instance } from './instance';

const findAllEmergencyHistoryApi = async () => {
	const response = await instance.get('/emergencies');

	return response;
};

export default findAllEmergencyHistoryApi;
