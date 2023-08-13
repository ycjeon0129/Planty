import React from 'react';
import Ticket from 'assets/icons/Ticket.svg';
import './TicketInfo.scss';
import Button from 'components/atoms/common/Button/Button';
import useUser from 'hooks/useUser';
import CustomAlert from 'components/organisms/common/CustomAlert/CustomAlert';
import useMovePage from 'hooks/useMovePage';

/**
 * 응급실 - 이용권 정보를 보여주는 컴포넌트.
 * useUser
 */
function TicketInfo() {
	const { movePage } = useMovePage();
	const [user] = useUser();
	const handleTicketBuy = () => {
		CustomAlert({
			title: '이용권 구매',
			desc: '응급실 이용권을 구매하시겠습니까? 결제 페이지로 이동합니다.',
			btnTitle: '구매하기',
			params: {},
			onAction: () => {
				const state = {
					product: {
						imgUrl: Ticket,
						period: null,
						name: '응급실 이용권',
						price: 5000,
					},
				};
				movePage('/shop/pay/1', state);
			},
		});
	};

	return (
		<div className="ticket-info-container">
			<div>
				<img src={Ticket} alt="이용권 그림" />
			</div>

			<div>
				{user?.emergencyCount ? (
					<span className="ticket-info-msg">
						현재 <span>{user?.emergencyCount}개</span>의 이용권을 <br />
						보유하고 있습니다.
					</span>
				) : (
					<span className="ticket-info-msg">
						앗! 잔여이용권이 없네요.
						<br />
						이용권 구매 후 이용해주세요.
					</span>
				)}
				<Button isActive text={`이용권 ${user?.emergencyCount ? '추가' : ''}구매하기`} handleClick={handleTicketBuy} />
			</div>
		</div>
	);
}

export default TicketInfo;
