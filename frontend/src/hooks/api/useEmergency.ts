import { useEffect, useState } from 'react';
import { IEmergencyHistory } from 'types/domain/Emergency';
import findAllEmergencyHistoryApi from 'utils/api/emergency';

const useEmergency = (): IEmergencyHistory[] | null => {
	const [emergencies, setEmergencies] = useState<IEmergencyHistory[] | null>(null);

	const fetchData = async () => {
		try {
			const response = await findAllEmergencyHistoryApi();
			// response.data.map((el: IEmergencyHistory[]) => setEmergencies(el));
			setEmergencies(response.data);
		} catch (error) {
			console.error('에러', error);
		}
	};
	useEffect(() => {
		fetchData();
	}, []);

	return emergencies;
};

export default useEmergency;
