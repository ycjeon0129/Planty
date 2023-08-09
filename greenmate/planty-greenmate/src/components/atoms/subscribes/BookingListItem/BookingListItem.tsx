import React from 'react';
import './BookingListItem.scss';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IConsulting } from 'types/subscribe';
import converTime from 'utils/converTime';
import 'moment/locale/ko';
import InfoRow from 'components/atoms/common/InfoRow/InfoRow';
import formatDate from 'utils/formatDate';
import SubscribeStateBadge from '../SubscribeStateBadge/SubscribeStateBadge';

function BookingListItem({ booking }: { booking: IConsulting }) {
	const getState = (active: boolean) => {
		if (active) return 'join';
		return 'notJoin';
	};
	return (
		<Accordion>
			<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
				<div className="booking-header">
					<h3>
						{formatDate(booking.date)} / {converTime(booking.time)}
					</h3>
					<div id="badge">
						<SubscribeStateBadge stateKey={getState(booking.active)} />
					</div>
				</div>
			</AccordionSummary>
			<AccordionDetails>
				<div className="booking-info">
					<div id="detail">
						<h3>컨설팅 예약 상세</h3>
						<InfoRow title="- 컨설팅 시작 시간" content={booking.startTime} />
						<InfoRow title="- 컨설팅 종료 시간" content={booking.endTime} />
						<InfoRow
							title="- 다음 컨설팅 권장일"
							content={`${formatDate(booking.recommendedStartDate)} ~ ${formatDate(booking.recommendedEndDate)} 中`}
						/>
					</div>
					<div id="advice">
						<h3>가드너에게 한마디</h3>
						<p>- {booking.advice}</p>
					</div>
				</div>
			</AccordionDetails>
		</Accordion>
	);
}

export default BookingListItem;
