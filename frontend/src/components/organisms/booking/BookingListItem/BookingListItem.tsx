import React from 'react';
import './BookingListItem.scss';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import 'moment/locale/ko';
import { IBooking } from 'types/domain/booking';
import convertTime from 'utils/common/convertTime';
import InfoRow from 'components/atoms/common/InfoRow/InfoRow';

function BookingListItem({ booking }: { booking: IBooking }) {
	return (
		<Accordion className="booking-list-item-container">
			<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
				<div className="booking-header">
					<h3>{booking.title}</h3>
					<h3>
						{booking.date} / {convertTime(booking.time)}
					</h3>
				</div>
			</AccordionSummary>
			<AccordionDetails>
				<div className="booking-info">
					<div id="detail">
						<h3>예약 정보 상세</h3>
						<InfoRow title="- 가드너" content={booking.user} />
						<InfoRow title="- 그린메이트" content={booking.greenmate} />
					</div>
				</div>
			</AccordionDetails>
		</Accordion>
	);
}

export default BookingListItem;
