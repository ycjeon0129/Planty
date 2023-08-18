import { useState, useEffect } from 'react';
import { ISubscribeDetail } from 'types/subscribe';
import { findSubscribeApi } from 'utils/api/subscribe';

const useSubscribe = (spid: number) => {
	const [subscribe, setSubscribe] = useState<ISubscribeDetail>();

	const fetchData = async (reqSpid: number) => {
		try {
			const response = await findSubscribeApi(reqSpid);
			setSubscribe(response.data);
		} catch (error) {
			console.error('에러', error);
		}
	};

	useEffect(() => {
		fetchData(spid);
	}, [spid]);

	return subscribe;
};

export default useSubscribe;
