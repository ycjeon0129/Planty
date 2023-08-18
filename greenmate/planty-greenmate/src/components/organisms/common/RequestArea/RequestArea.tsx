import ActivityManagement from 'components/atoms/sidebar/ActivityManagement/ActivityManagement';
import React from 'react';
import { IRequest } from 'types/consulting';
import { useRecoilState } from 'recoil';
import { consultingRequestState } from 'recoil/store';
import useRefreshRequests from 'hooks/api/useRefreshRequests';
import RequestList from '../RequestList/RequestList';

function RequestArea() {
	const [requests] = useRecoilState<IRequest[]>(consultingRequestState);
	const fetchData = useRefreshRequests();

	const handleRefresh = () => {
		fetchData();
	};

	return (
		<>
			<ActivityManagement refreshRequests={handleRefresh} />
			<RequestList requests={requests} />
		</>
	);
}

export default RequestArea;
