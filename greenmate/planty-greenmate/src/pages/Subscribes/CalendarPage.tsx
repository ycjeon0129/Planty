import CalendarPageLayout from 'components/layout/page/Subscribes/CalendarPageLayout/CalendarPageLayout';
import BookingList from 'components/organisms/subscribes/BookingList/BookingList';
import FullScheduleCalendar from 'components/organisms/subscribes/FullScheduleCalendar/FullScheduleCalendar';
import useSelectedDate from 'hooks/useSelectedDate';
import React from 'react';

function CalendarPage() {
	const [date, setDate, formatDate] = useSelectedDate();

	return (
		<CalendarPageLayout>
			<FullScheduleCalendar selectedDate={date} setSelectedDate={setDate} />
			<div>
				<h3>{formatDate}</h3>
				<BookingList selectedDate={date} />
			</div>
		</CalendarPageLayout>
	);
}

export default CalendarPage;
