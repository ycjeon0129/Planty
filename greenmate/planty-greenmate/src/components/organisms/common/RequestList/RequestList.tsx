import RequestItem from 'components/atoms/sidebar/requestItem/RequestItem';
import React, { useEffect, useState } from 'react';
import './RequestList.scss';
import { IConsultingRequest } from 'types/consulting';
import { useRecoilState } from 'recoil';
import { activityState } from 'recoil/auth';

function RequestList({ requests }: { requests: IConsultingRequest[] }) {
	const [activity] = useRecoilState(activityState);
	const [msg, setMsg] = useState('요청을 수신하려면 활동상태를 활성화하세요.');

	useEffect(() => {
		if (activity) setMsg('수신된 컨설팅 요청이 없습니다.');
		else setMsg('요청을 수신하려면\n활동상태를 활성화하세요.');
	}, [activity]);

	return (
		<div className="request-list-container">
			{activity && requests.length ? (
				requests.map((r) => <RequestItem type={r.emergencyType} user={r.username} category={r.webRTCType} />)
			) : (
				<div id="no-content" className={activity ? '' : 'status-off'}>
					{msg}
				</div>
			)}
		</div>
	);
}

export default RequestList;
