import ActivityManagement from 'components/atoms/sidebar/ActivityManagement/ActivityManagement';
import React, { useState } from 'react';
import { findAllRequest } from 'utils/api/consulting';
import { IConsultingRequest } from 'types/consulting';
import { toast } from 'react-hot-toast';
import RequestList from '../RequestList/RequestList';

function RequestArea() {
	const [requests, setRequests] = useState<IConsultingRequest[]>([]);

	const refreshRequests = async () => {
		try {
			const response = await findAllRequest();
			if (response.status === 200) {
				toast.success('컨설팅 요청 목록 업데이트 성공 😀');
				setRequests(response.data);
			}
		} catch (error) {
			toast.error('컨설팅 요청 목록 업데이트 실패 😥');
			console.error(error);
		}
	};

	return (
		<>
			<ActivityManagement refreshRequests={refreshRequests} />
			<RequestList requests={requests} />
		</>
	);
}

export default RequestArea;
