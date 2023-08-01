import { ISubscribe } from 'types/subscribe/subscribe';

const dumySubscribe: ISubscribe[] = [
	{
		sid: 0,
		title: '누구나 쉽게 키우는 몬스테라 클래스',
		state: 'wait',
		thumbnail: 'https://www.flowerrepublic.co.kr/shopimages/sungmo9160/0090010004832.jpg?1665473103',
		info: { startDate: '2023/07/23', consultCount: '총 5회 / 잔여 3회', consultDate: '2023/07/23 14:00' },
	},
	{
		sid: 1,
		title: '스투키 일주일 클래스',
		state: 'done',
		thumbnail:
			'https://mblogthumb-phinf.pstatic.net/20160820_73/oneflora_1471684049417Ko98B_JPEG/image_9540627681471684031922.jpg?type=w800',
		info: { startDate: '2023/07/23', consultCount: '총 5회 / 잔여 3회', consultDate: '2023/07/23 14:00' },
	},
	{
		sid: 2,
		title: '싸피 방울토마토 짱짱 클래스',
		state: 'wait',
		thumbnail: 'https://gardening.godohosting.com/2018/mfset/redcherrytomato_01.jpg',
		info: { startDate: '2023/07/23', consultCount: '총 5회 / 잔여 3회', consultDate: '2023/07/23 14:00' },
	},
];

export default dumySubscribe;
