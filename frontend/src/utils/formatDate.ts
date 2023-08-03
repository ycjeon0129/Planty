/**
 * Date 객체를 0000-00-00과 같은 형태로 바꿔주는 함수
 * @param date Date 객체
 * @returns 0000-00-00 형태의 string 날짜
 */
const formatDate = ({ date }: { date: Date | null }): string | null => {
	if (date === null) return null;
	const year = date.getFullYear();
	const month = `00${(date.getMonth() + 1).toString()}`.slice(-2);
	const day = `00${date.getDate().toString()}`.slice(-2);

	return `${year}-${month}-${day}`;
};

export default formatDate;
