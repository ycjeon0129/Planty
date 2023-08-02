import React, { useState } from 'react';
import Calendar from 'react-calendar';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

function CustomCalendar() {
	const [value, setValue] = useState<Value>(new Date());

	return (
		<div>
			<Calendar onChange={setValue} value={value} />
			<span>{value?.toString()}</span>
		</div>
	);
}

export default CustomCalendar;
