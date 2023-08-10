import { useState, useEffect } from 'react';
import { IEmergency } from 'types/history';
import { findEmergencyApi } from 'utils/api/emergency';

const useEmergency = (eid: number) => {
	const [emergency, seteMergency] = useState<IEmergency>();

	const fetchData = async (reqEid: number) => {
		try {
			const response = await findEmergencyApi(reqEid);
			seteMergency(response.data);
		} catch (error) {
			console.error('에러', error);
		}
	};

	useEffect(() => {
		fetchData(eid);
	}, [eid]);

	return emergency;
};

export default useEmergency;
