import { useState, useEffect } from 'react';
import { IConsulting } from 'types/subscribe';
import { findAllConsultingBySpid } from 'utils/api/consulting';

const useAllConsultingBySpid = (spid: number) => {
	const [consultings, setConsultings] = useState<IConsulting[]>([]);

	const fetchData = async (reqSpid: number) => {
		try {
			const response = await findAllConsultingBySpid(reqSpid);
			setConsultings(response.data);
		} catch (error) {
			console.error('에러', error);
		}
	};

	useEffect(() => {
		fetchData(spid);
	}, [spid]);

	return consultings;
};

export default useAllConsultingBySpid;
