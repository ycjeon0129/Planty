import React from 'react';
import Ticket from 'assets/icons/Ticket.svg';
import './TicketInfo.scss';
import Button from 'components/atoms/common/Button/Button';
import useUser from 'hooks/useUser';

/**
 * 응급실 - 이용권 정보를 보여주는 컴포넌트.
 * useUser
 */
function TicketInfo() {
	const [user] = useUser();

	return (
		<div className="ticket-info-container">
			<div>
				<img src={Ticket} alt="이용권 그림" />
			</div>

			<div>
				{user?.emergencyCount ? (
					<span className="ticket-info-msg">
						현재 <span>{user?.emergencyCount}개의 이용권</span>을 <br />
						보유하고 있습니다.
					</span>
				) : (
					<span className="ticket-info-msg">
						앗! 잔여이용권이 없네요.
						<br />
						이용권 구매 후 이용해주세요.
					</span>
				)}
				<Button
					isActive
					text={`이용권 ${user?.emergencyCount ? '추가' : ''}구매하기`}
					handleClick={() => {
						alert('이용권 구매하기');
					}}
				/>
			</div>
		</div>
	);
}

export default TicketInfo;
