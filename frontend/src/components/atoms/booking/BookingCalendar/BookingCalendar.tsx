import React from 'react';
import './BookingCalendar.scss';
import Calendar from 'react-calendar';
import { Value } from 'types/global';
import moment from 'moment';

function BookingCalendar({
	selectDate,
	setSelectDate,
}: {
	selectDate: Value;
	setSelectDate: React.Dispatch<React.SetStateAction<Value>>;
}) {
	return (
		<div id="booking-calendar">
			<Calendar
				onChange={setSelectDate}
				prev2Label={null}
				showNeighboringMonth={false}
				value={selectDate}
				next2Label={null}
				calendarType="hebrew"
				minDate={new Date()}
				formatDay={(_, date) => moment(date).format('DD')}
				tileDisabled={({ date }) => date.getDay() === 0 || date.getDay() === 6}
			/>
		</div>
	);
}

export default BookingCalendar;
