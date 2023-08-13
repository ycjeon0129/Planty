import RequestItem from 'components/atoms/sidebar/requestItem/RequestItem';
import React, { useEffect, useState } from 'react';
import './RequestList.scss';
import { findAllRequest } from 'utils/api/consulting';
import { IConsultingRequest } from 'types/consulting';
import { useRecoilState } from 'recoil';
import { activeState } from 'recoil/auth';

function RequestList() {
	const [requests, setRequests] = useState<IConsultingRequest[]>([]);
	const [active] = useRecoilState(activeState);
	const [msg, setMsg] = useState('요청을 수신하려면 활동상태를 활성화하세요.');

	const fetchData = async () => {
		try {
			const response = await findAllRequest();
			console.log(response);
			setRequests(response.data);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		if (active) setMsg('수신된 컨설팅 요청이 없습니다.');
		else setMsg('요청을 수신하려면\n활동상태를 활성화하세요.');
	}, [active]);

	return (
		<div className="request-list-container">
			{requests.length ? (
				requests.map((r) => <RequestItem type={r.type} user={r.user} category={r.category} />)
			) : (
				<div id="no-content" className={active ? '' : 'status-off'}>
					{msg}
				</div>
			)}
		</div>
	);
}

export default RequestList;
