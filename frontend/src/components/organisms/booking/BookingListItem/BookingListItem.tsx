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
import confirmDialog from 'utils/common/confirmDialog';
import { deleteBooking } from 'utils/api/booking';

function BookingListItem({ booking }: { booking: IBooking }) {
	const dialogMessage = `${booking.date} ${convertTime(booking.time)}에 진행되는 '${
		booking.title
	}'의 예약을 정말 취소하시겠습니까?`;

	async function cancelBooking() {
		try {
			const response = await deleteBooking(booking.cid);
			// TODO : 삭제 후 리로드
			console.log(response);
		} catch (error) {
			console.error(error);
		}
	}

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
						<div id="detail-header">
							<h3>예약 정보 상세</h3>
							<button type="button" onClick={() => confirmDialog(dialogMessage, cancelBooking)}>
								예약 취소
							</button>
						</div>
						<InfoRow title="- 가드너" content={booking.user} />
						<InfoRow title="- 그린메이트" content={booking.greenmate} />
					</div>
				</div>
			</AccordionDetails>
		</Accordion>
	);
}

export default BookingListItem;
