import './FullScheduleCalendar.scss';
import React from 'react';
import moment from 'moment';
import Calendar from 'react-calendar';
import { Value } from 'types/base/global';
import useBookingList from 'hooks/api/useAllBooking';
import isSameDate from 'utils/isSameDate';
import { yesterdayDateTime } from 'constants/common/Date';

interface ICustomCaledarProps {
	selectedDate: Value;
	setSelectedDate: React.Dispatch<React.SetStateAction<Value>>;
}

function FullScheduleCalendar({ selectedDate, setSelectedDate }: ICustomCaledarProps) {
	const bookings = useBookingList();

	// TODOS : API 나오면 이걸로 교체.
	const getTileContent = (date: Date) => {
		const dot = <div className="booking-dot-container" />;
		return bookings.find((el) => isSameDate(date, el.date)) ? dot : null;
	};

	return (
		<div className="custom-calendar-container">
			<Calendar
				onChange={setSelectedDate}
				value={selectedDate}
				calendarType="hebrew"
				prev2Label={null}
				next2Label={null}
				showNeighboringMonth={false}
				tileClassName={({ date }) => (date.getTime() < yesterdayDateTime ? 'before-days-color-gray' : null)}
				formatDay={(_, date) => moment(date).format('DD')}
				tileContent={({ date }) => getTileContent(date)}
			/>
		</div>
	);
}

export default FullScheduleCalendar;
