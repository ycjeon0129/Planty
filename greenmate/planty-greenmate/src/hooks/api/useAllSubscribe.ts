import { useState, useEffect } from 'react';
import { ISubscribe } from 'types/subscribe';
import { findAllSubscribeApi } from 'utils/api/subscribe';

const useAllSubscribe = () => {
	const [subscribes, setSubscribes] = useState<ISubscribe[]>([]);

	const fetchData = async () => {
		try {
			const response = await findAllSubscribeApi();
			setSubscribes(response.data);
		} catch (error) {
			console.error('에러', error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return subscribes;
};

export default useAllSubscribe;
