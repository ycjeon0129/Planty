import { useEffect, useState } from 'react';
import { ISubscribe, ISubscribeResponse } from 'types/subscribe';
import { findAllSubscribeApi } from 'utils/api/subscribe';
import responseToSubscribe from 'utils/subscribes/responseToSubscribe';

const useAllSubscribe = (): ISubscribe[] | null => {
	const [subscribes, setSubscribes] = useState<ISubscribe[] | null>(null);

	/**
	 * 서버로부터 전체 구독 정보를 받아와 subscribes에 저장.
	 */
	const fetchData = async () => {
		try {
			const response = await findAllSubscribeApi();
			const newSubcribes: ISubscribe[] = response.data.map((el: ISubscribeResponse) => responseToSubscribe(el));
			setSubscribes(newSubcribes);
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
