import React from 'react';
import useIbooking from 'hooks/api/useIbooking';
import ConsultingReservation from 'components/atoms/ConsultingReservation/ConsultingReservation';

function ConsultingReservationList() {
	const subscribes = useIbooking();

	return (
		<div>
			<div>{subscribes?.map((s) => <ConsultingReservation booking={s} />)}</div>
		</div>
	);
}

export default ConsultingReservationList;
