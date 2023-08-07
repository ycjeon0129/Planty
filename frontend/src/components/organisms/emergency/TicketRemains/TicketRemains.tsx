import React from 'react';
import './TicketRemains.scss';
import { ReactComponent as TicketSet } from 'assets/icons/TicketSet.svg';
import useUser from 'hooks/useUser';

/**
 * 응급실 참여하기 - 응급실 서비스 box
 * useUser
 */
function TicketRemains() {
	const [user] = useUser();
	return (
		<div className="ticketremains-container">
			<div>Planty 응급실 서비스</div>
			<div className="ticketset">
				<TicketSet />
			</div>
			남은 이용권 갯수 : {user?.ticketCount}
		</div>
	);
}

export default TicketRemains;
