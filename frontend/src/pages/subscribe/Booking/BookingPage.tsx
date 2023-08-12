import React, { useState, useEffect, useCallback } from 'react';
import IconText from 'components/atoms/common/IconText/IconText';
import BookingPageLayout from 'components/layout/Page/BookingPageLayout/BookingPageLayout';
import CalendarIcon from 'assets/icons/Calendar.svg';
import TimeIcon from 'assets/icons/Time.svg';
import PageTitleButton from 'components/atoms/common/PageTitleButton/PageTitleButton';
import { Value } from 'types/common/global';
import Button from 'components/atoms/common/Button/Button';
import BookingTimeList from 'components/organisms/booking/BookingTimeList/BookingTimeList';
import BOOKING_TIME_TEXT_LIST from 'constants/common/Booking';
import { findIsBookingInDateApi, saveBooking } from 'utils/api/booking';
import formatDate from 'utils/date/formatDate';
import { useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import convertTime from 'utils/common/convertTime';
import useMovePage from 'hooks/useMovePage';
import confirmDialog from 'utils/common/confirmDialog';
import BookingCalendar from '../../../components/atoms/booking/BookingCalendar/BookingCalendar';

function BookingPage() {
	const { sid } = useParams();
	const { movePage } = useMovePage();
	const [selectDate, setSelectDate] = useState<Value>(new Date());
	const [selectTime, setSelectTime] = useState<number>(0);
	const [timeStatusList, setTimeStatusList] = useState<boolean[]>([]);

	/**
	 * 예약하기 버튼 클릭 시
	 */
	const onSubmit = () => {
		const date = formatDate(selectDate as Date);
		const timeIdx = selectTime + 1;
		const message = `${date}의 ${convertTime(timeIdx)}\n선택하신 일시에 예약하시겠습니까?`;

		// confirm OK
		const onConfirm = async () => {
			try {
				const response = await saveBooking(+(sid as string), date, timeIdx);
				if (response.status === 200) {
					toast.success(`${date} ${convertTime(timeIdx)}에 예약이 완료되었습니다😊\n예약 관리페이지로 이동합니다.`);
					movePage('/mypage/booking');
				} else {
					toast.error(`예약에 실패했습니다. \n잠시 후 다시 시도하시거나, 다른 날짜를 선택해주세요.`);
				}
			} catch (error) {
				console.error(error);
			}
		};
		// confirm
		confirmDialog({ title: '예약하기', message, confirmLabel: '예약하기', cancelLabel: '그만두기', onConfirm });
	};

	/**
	 * selectDate의 예약 현황 Time 배열 받아오기
	 * 예약이 되어있으면 true, 되어있지않다면 false (false 인 경우에만 예약 가능)
	 */
	const fetchData = useCallback(async (reqDate: Value, reqSid: string | undefined) => {
		try {
			const date = formatDate(reqDate as Date);

			const response = await findIsBookingInDateApi(date, +(reqSid as string));

			setTimeStatusList(response.data);
		} catch (error) {
			console.error(error);
		}
	}, []);

	useEffect(() => {
		fetchData(selectDate, sid);
	}, [selectDate, sid, fetchData]);

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
