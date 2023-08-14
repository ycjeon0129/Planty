/* eslint-disable global-require */
import { ISubscribeDetail, ISubscribeDetailResponse } from 'types/domain/subscribe';
import getSubscribeState from './getSubscribeState';

/**
 * 실행여부, 취소여부, 종료여부, 컨설팅 일자로 구독의 현재 상태를 리턴
 * @param active 실행여부
 * @param cancel 취소여부
 * @param end 종료여부
 * @param consultingDate 가까운 컨설팅 일자
 * @returns 'wait' | 'done' | 'end' | 'join' | 'notJoin'
 */
const responseToSubscribeDetail = (res: ISubscribeDetailResponse): ISubscribeDetail => {
	return {
		sid: res.sid,
		startDate: res.startDate,
		title: res.title,
		info: {
			consultingCnt: res.consultingCnt,
			consultingRemainCnt: res.consultingRemainCnt,
			consultingDate: res.consultingDate,
			consultingCancel: res.consultingCancel,
			consultingActive: res.consultingActive,
			consultingTime: res.consultingTime,
		},
		state: getSubscribeState(res.consultingActive, res.consultingCancel, res.end, res.consultingDate),
		thumbnail: res.thumbnail ?? require('assets/images/defaultImage.png'),
		endDate: res.endDate,
		plant: res.plant,
		greenmate: res.greenmate,
		embeddedInfo: res.embeddedInfo,
	};
};

export default responseToSubscribeDetail;
