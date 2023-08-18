import { useState, useEffect } from 'react';
import { IEmergency } from 'types/history';
import { findAllEmergencyApi } from 'utils/api/emergency';
// import { findEmergencyApi } from 'utils/api/emergency';

const useEmergency = (eid: number) => {
	const [emergency, setEmergency] = useState<IEmergency>();

	const fetchData = async (reqEid: number) => {
		try {
			// const response = await findEmergencyApi(reqEid);
			const response = await findAllEmergencyApi();
			setEmergency(response.data.filter((el: IEmergency) => reqEid === el.eid)[0]);
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
