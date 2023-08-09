/**
 * 실행여부, 취소여부, 종료여부, 컨설팅 일자로 구독의 현재 상태를 리턴
 * @param active 실행여부
 * @param cancel 취소여부
 * @param end 종료여부
 * @param consultingDate 가까운 컨설팅 일자
 * @returns 'wait' | 'done' | 'end' | 'join' | 'notJoin'
 */
const getSubscribeState = (
	active: boolean,
	cancel: boolean,
	end: boolean,
	consultingDate: string | null,
): 'wait' | 'done' | 'end' | 'join' | 'notJoin' => {
	if (end) return 'end';
	if (consultingDate) return 'done';
	if (active && !cancel) return 'join';
	if (!active && cancel) return 'notJoin';
	return 'wait';
};

export default getSubscribeState;
