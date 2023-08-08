import './FullScheduleCalendar.scss';
import React from 'react';
import moment from 'moment';
import Calendar from 'react-calendar';
import { Value } from 'types/global';
import useBookingList from 'hooks/api/useBookingList';
import isSameDate from 'utils/isSameDate';
import { yesterdayDateTime } from 'constants/common/Date';
import { IConsulting } from 'types/subscribe';

interface ICustomCaledarProps {
	selectedDate: Value;
	setSelectedDate: React.Dispatch<React.SetStateAction<Value>>;
}

/**
 * (임시 함수 - API 나오면 교체 예정) 선택된 날짜에 해당하는 예약건에 대해 dot 표시
 * @param bookings 전체 예약(컨설팅) 목록
 * @param date 현재 선택된 날짜
 */
const getTileContent = (bookings: IConsulting[], date: Date) => {
	const dot = <div className="booking-dot-container" />;
	return bookings.find((el) => isSameDate(moment(date).format('YY-MM-DD'), el.date)) ? dot : null;
};

function FullScheduleCalendar({ selectedDate, setSelectedDate }: ICustomCaledarProps) {
	const bookings = useBookingList();

	// TODOS : API 나오면 이걸로 교체.
	// const getTileContent = (date: Date) => {
	// 	const dot = <div className="booking-dot-container" />;
	// 	return bookings.find((el) => isSameDate(date, el.date)) ? dot : null;
	// };

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
				tileContent={({ date }) => getTileContent(bookings, date)}
			/>
		</div>
	);
}

export default FullScheduleCalendar;
