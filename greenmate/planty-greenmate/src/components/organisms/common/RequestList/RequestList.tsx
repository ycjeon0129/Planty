import RequestItem from 'components/atoms/sidebar/requestItem/RequestItem';
import React, { useEffect } from 'react';
import './RequestList.scss';
import { findAllRequest } from 'utils/api/consulting';

function RequestList() {
	// const [requests, setRequests] = useState();

	const fetchData = async () => {
		try {
			const response = await findAllRequest();
			console.log(response);
			// setRequests();
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="request-list-container">
			<RequestItem type="채팅" greenmate="영국여자" service="응급실" />
		</div>
	);
}

export default RequestList;
