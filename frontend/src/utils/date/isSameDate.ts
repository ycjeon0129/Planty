import moment from 'moment';

/**
 * 두 Date 객체의 날짜가 같은지 비교. (시간 X)
 * @param firstDate 첫 번째 Date
 * @param secondDate 두 번째 Date
 * @returns true / false
 */
const isSameDate = (firstDate: Date | string, secondDate: Date | string) => {
	const format = 'YYYY-MM-DD';
	return moment(firstDate).format(format) === moment(secondDate).format(format);
};

export default isSameDate;
