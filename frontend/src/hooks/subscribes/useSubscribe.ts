import { useEffect, useState } from 'react';
import { ISubscribeDetail } from 'types/domain/subscribe';
import { findSubscribeApi } from 'utils/api/subscribe';
import responseToSubscribeDetail from 'utils/subscribes/responseToSubscribeDetail';

const useSubscribe = (sid: number): ISubscribeDetail | null => {
	const [subscribe, setSubscribe] = useState<ISubscribeDetail | null>(null);

	/**
	 * 서버로부터 구독 정보를 받아와 greenmateCount에 저장.
	 */
	const fetchData = async (reqSid: number) => {
		try {
			const response = await findSubscribeApi(reqSid);
			console.log('구독 정보', response);
			const newSubcribe: ISubscribeDetail = responseToSubscribeDetail(response.data.resObject);
			setSubscribe(newSubcribe);
		} catch (error) {
			console.error('에러', error);
		}
	};

	useEffect(() => {
		fetchData(sid);
	}, [sid]);

	return subscribe;
};

export default useSubscribe;
