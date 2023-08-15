import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import selectedDateState from 'recoil/booking';
import { Value } from 'types/common/global';
import formatDate from 'utils/date/formatDate';

/**
 * 캘린더에서, 현재 선택된 날짜를 업데이트해주는 커스텀 훅.
 * @returns [date, setDate, formatDate]
 * @returns date : 현재 선택된 날짜 값(Date | null)
 * @returns setDate : 선택된 날짜를 변경
 * @returns formatDate : 현재 선택된 날짜를 포매팅된 상태로 반환()
 *
 *
 */
const useSelectedDate = (): [Value, React.Dispatch<React.SetStateAction<Value>>, string | null] => {
	const [date, setDate]: [Value, React.Dispatch<React.SetStateAction<Value>>] = useState<Value>(new Date());
	const [, setSelectedDate] = useRecoilState(selectedDateState);
	const [formattedDate, setFormatDate] = useState('');

	// value가 Date 객체인지 확인
	const isDateValue = date instanceof Date;

	useEffect(() => {
		// 포매팅된 날짜 ex) 2023-03-08
		if (isDateValue) {
			setFormatDate(formatDate(date) as string);
			setSelectedDate(date);
		}
	}, [date, isDateValue, setSelectedDate]);

	return [date, setDate, formattedDate];
};

export default useSelectedDate;
