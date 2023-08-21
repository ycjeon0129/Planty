import { useState, useEffect } from 'react';
import { IConsulting } from 'types/subscribe';
import { findAllConsulting } from 'utils/api/consulting';

const useAllConsulting = () => {
	const [consultings, setConsultings] = useState<IConsulting[]>([]);

	const fetchData = async () => {
		try {
			const response = await findAllConsulting();
			setConsultings(response.data);
		} catch (error) {
			console.error('에러', error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return consultings;
};

export default useAllConsulting;
