import React from 'react';
import useAllBooking from 'hooks/api/useAllBooking';
import ConsultingReservation from 'components/atoms/ConsultingReservation/ConsultingReservation';

function ConsultingReservationList() {
	const subscribes = useAllBooking();

	return (
		<div>
			<div>{subscribes?.map((s) => <ConsultingReservation subscribe={s} />)}</div>
		</div>
	);
}

export default ConsultingReservationList;
