import { useEffect, useState } from 'react';
import { IConsulting } from 'types/subscribe';
import { findAllConsulting } from 'utils/api/consulting';

const useConsultingList = (): IConsulting[] => {
	const [consultings, setConsultings] = useState<IConsulting[]>([]);

	const fetchData = async () => {
		try {
			const response = await findAllConsulting();
			if (response?.data.subscribes) setConsultings(response.data.subscribes);
		} catch (error) {
			console.error('에러', error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return consultings;
};

export default useConsultingList;
