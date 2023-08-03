import React from 'react';
import moment from 'moment';
import Calendar from 'react-calendar';
import './CustomCalendar.scss';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

function CustomCalendar({
	selectedDate,
	setSelectedDate,
}: {
	selectedDate: Value;
	setSelectedDate: React.Dispatch<React.SetStateAction<Value>>;
}) {
	return (
		<div className="custom-calendar-container">
			<Calendar onChange={setSelectedDate} value={selectedDate} formatDay={(_, date) => moment(date).format('DD')} />
		</div>
	);
}

export default CustomCalendar;
