import { useState, useEffect } from 'react';
import { IEmergency } from 'types/history';
import { findAllEmergencyApi } from 'utils/api/emergency';

const useAllEmergency = () => {
	const [emergency, setEmergency] = useState<IEmergency[]>([]);

	const fetchData = async () => {
		try {
			const response = await findAllEmergencyApi();
			setEmergency(response.data);
		} catch (error) {
			console.error('에러', error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return emergency;
};

export default useAllEmergency;
