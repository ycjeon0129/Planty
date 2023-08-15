import { ISubscribe, ISubscribeResponse } from 'types/domain/subscribe';
import getSubscribeState from './getSubscribeState';

/**
 * 실행여부, 취소여부, 종료여부, 컨설팅 일자로 구독의 현재 상태를 리턴
 * @param active 실행여부
 * @param cancel 취소여부
 * @param end 종료여부
 * @param consultingDate 가까운 컨설팅 일자
 * @returns 'wait' | 'done' | 'end' | 'join' | 'notJoin'
 */
const responseToSubscribe = (res: ISubscribeResponse): ISubscribe => {
	return {
		sid: res.sid,
		startDate: res.startDate,
		endDate: res.endDate,
		title: res.title,
		end: res.end,
		state: getSubscribeState(res.nearConsulting.active, res.nearConsulting.cancel, res.end, res.nearConsulting.date),
		thumbnail: res.thumbnail ?? 'https://gardening.godohosting.com/2018/mfset/redcherrytomato_01.jpg',
		consultingCnt: res.consultingCnt,
		consultingRemainCnt: res.consultingRemainCnt,
		greenmate: res.greenmate,
		nearConsulting: {
			cid: res.nearConsulting.cid,
			date: res.nearConsulting.date,
			cancel: res.nearConsulting.cancel,
			active: res.nearConsulting.active,
			time: res.nearConsulting.time,
		},
	};
};

export default responseToSubscribe;
