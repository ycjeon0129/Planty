import { useState, useEffect } from 'react';
import { ISubscribeDetail } from 'types/subscribe';
import { findSubscribeApi } from 'utils/api/subscribe';

const useSubscribe = (sid: number) => {
	const [subscribe, setSubscribe] = useState<ISubscribeDetail>();

	const fetchData = async (reqSid: number) => {
		try {
			const response = await findSubscribeApi(reqSid);
			setSubscribe(response.data);
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
