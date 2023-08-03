import { Value } from 'types/global';
import instance from './instance';

/**
 * 예약(컨설팅) 목록 전체조회 요청
 * @param date optional. Date 객체가 들어오면 해당 날짜에 해당하는 예약 목록만 출력.
 */
const findConsultingApi = async ({ date }: { date?: Value } = {}) => {
	if (date && date instanceof Date) {
		const params = { year: date?.getFullYear(), month: date && date.getMonth() + 1, day: date?.getDate() };
		const response = await instance.get(`/consultings`, { params });
		return response;
	}
	const response = await instance.get(`/consultings`);
	return response;
};

export default findConsultingApi;
