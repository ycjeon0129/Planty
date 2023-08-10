import React from 'react';
import useIbooking from 'hooks/api/useIbooking';
import ConsultingReservation from 'components/atoms/ConsultingReservation/ConsultingReservation';

function ConsultingReservationList() {
	const subscribes = useIbooking();
	if (subscribes.length) {
		return (
			<div>
				<div>
					{subscribes.map((s) => (
						<ConsultingReservation booking={s} />
					))}
				</div>
			</div>
		);
	}

	return (
		<div className="subscribes-list-container no-content">
			<div>현재 컨설팅 내역이 없습니다.</div>
		</div>
	);
}

export default ConsultingReservationList;
