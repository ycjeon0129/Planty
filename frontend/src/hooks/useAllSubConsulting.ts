import { useEffect, useState } from 'react';
import { IConsulting } from 'types/domain/consulting';
import { findAllConsultingApi } from 'utils/api/consulting';

const useAllSubConsulting = (): IConsulting[] | null => {
	const [subConsult, setSubConsult] = useState<IConsulting[] | null>(null);

	const fetchData = async () => {
		try {
			const response = await findAllConsultingApi();
			// response.data.map((el: IEmergencyHistory[]) => setEmergencies(el));
			setSubConsult(response.data);
		} catch (error) {
			console.error('에러', error);
		}
	};
	useEffect(() => {
		fetchData();
	}, []);

	return subConsult;
};

export default useAllSubConsulting;
