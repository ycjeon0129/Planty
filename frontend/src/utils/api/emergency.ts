import { instance } from './instance';

const findAllEmergencyHistoryApi = async () => {
	const response = await instance.get('/emergencies');
	// console.log('emergency.ts', response);

	return response;
};

export default findAllEmergencyHistoryApi;
