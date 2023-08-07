import React, { useState, useEffect } from 'react';
import IconText from 'components/atoms/common/IconText/IconText';
import BookingPageLayout from 'components/layout/Page/BookingPageLayout/BookingPageLayout';
import CalendarIcon from 'assets/icons/Calendar.svg';
import TimeIcon from 'assets/icons/Time.svg';
import PageTitleButton from 'components/atoms/common/PageTitleButton/PageTitleButton';
import { Value } from 'types/global';
import Button from 'components/atoms/common/Button/Button';
import BookingTimeList from 'components/organisms/booking/BookingTimeList/BookingTimeList';
import BOOKING_TIME_TEXT_LIST from 'constants/common/Booking';
import { tempTimeStatusList } from 'dummy';
import BookingCalendar from '../../../components/atoms/booking/BookingCalendar/BookingCalendar';

function BookingPage() {
	const [selectDate, setSelectDate] = useState<Value>(new Date());
	const [selectTime, setSelectTime] = useState<number>(0);
	const [timeStatusList, setTimeStatusList] = useState<boolean[]>(tempTimeStatusList);

	const onSubmit = () => {
		alert('클릭');
	};

	useEffect(() => {
		// selectDate 이용해 예약 시간 목록 가져오는 API 요청
		console.log('예약 시간 리스트 바뀜', selectDate);
		setTimeStatusList(tempTimeStatusList);
	}, [selectDate]);

	return (
		<BookingPageLayout>
			{/* 페이지 헤더 */}
			<PageTitleButton type="close" text="예약하기" />

			{/* 날짜 선택 */}
			<IconText imgUrl={CalendarIcon} text="날짜 선택" />
			<BookingCalendar selectDate={selectDate} setSelectDate={setSelectDate} />

			{/* 시간 선택 */}
			<IconText imgUrl={TimeIcon} text="시간 선택" />
			<BookingTimeList
				selectTime={selectTime}
				setSelectTime={setSelectTime}
				timeTextList={BOOKING_TIME_TEXT_LIST}
				timeStatusList={timeStatusList}
			/>

			{/* 예약하기 버튼 */}
			<Button isActive text="예약하기" handleClick={onSubmit} />
		</BookingPageLayout>
	);
}

export default BookingPage;
