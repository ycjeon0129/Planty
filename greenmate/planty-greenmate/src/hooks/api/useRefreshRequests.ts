/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useRecoilState } from 'recoil';
import { consultingRequestState } from 'recoil/store';
import { findAllRequest } from 'utils/api/consulting';

const useRefreshRequests = () => {
	const [requests, setRequests] = useRecoilState(consultingRequestState);

	const fetchData = useCallback(async () => {
		try {
			const response = await findAllRequest();
			if (response.status === 200) {
				if (requests.length !== response.data.length) {
					toast.success('컨설팅 요청 목록 업데이트 성공 😀\n왼쪽 하단의 컨설팅 요청 목록을 확인하세요.');
				}
				setRequests(response.data);
			}
		} catch (error) {
			toast.error('컨설팅 요청 목록 업데이트 실패 😥\n잠시 후 다시 시도하세요.');
			console.error(error);
		}
	}, []);

	useEffect(() => {
		fetchData();
	}, []);

	return fetchData;
};

export default useRefreshRequests;
