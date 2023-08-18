import React from 'react';
import './TicketRemains.scss';
import { ReactComponent as TicketSet } from 'assets/icons/TicketSet.svg';
import useUser from 'hooks/common/useUser';

/**
 * 응급실 참여하기 - 응급실 서비스 box
 * useUser
 */
function TicketRemains() {
	const [user] = useUser();
	return (
		<div className="center">
			<div className="ticketremains-container">
				<h3>응급실 서비스</h3>
				<div className="service-desc">&quot; 실시간 컨설팅 서비스입니다 &quot;</div>
				<div className="ticketset">
					<TicketSet />
				</div>
				남은 이용권 갯수 : {user?.emergencyCount}
			</div>
		</div>
	);
}

export default TicketRemains;
