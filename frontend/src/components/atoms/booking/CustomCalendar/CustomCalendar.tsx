import React, { useState } from 'react';
import moment from 'moment';
import Calendar from 'react-calendar';
import './CustomCalendar.scss';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

function CustomCalendar() {
	const [value, setValue] = useState<Value>(new Date());

	return (
		<div className="custom-calendar-container">
			<Calendar onChange={setValue} value={value} formatDay={(_, date) => moment(date).format('DD')} />
			<span>{value?.toString()}</span>
		</div>
	);
}

export default CustomCalendar;
