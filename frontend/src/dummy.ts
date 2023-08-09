import { IConsultingHistory } from 'types/consulting';
import { IProduct, IBanner, IConsulting, IProductDetail } from 'types/dummy';
import { ISubscribeDetail } from 'types/subscribe';

export const dummyBookings: IConsulting[] = [
	{
		sid: 0,
		cid: 1,
		user: '김인혁',
		greenmate: '전인혁',
		subscribe: '스투키 클래스',
		date: new Date('2023-08-02'),
		thumbnail: 'https://gardening.godohosting.com/2018/mfset/redcherrytomato_01.jpg',
		cancel: false,
		active: true,
		log: {
			times: 4,
			startTime: new Date(),
			endTime: new Date(),
			recommendStartDate: new Date(),
			recommendEndDate: new Date(),
			content: 'ㅎㅇ',
		},
	},
	{
		sid: 1,
		cid: 2,
		user: '양시온',
		greenmate: '전윤철',
		subscribe: '강낭콩 클래스',
		date: new Date('2023-08-05'),
		thumbnail: 'https://www.flowerrepublic.co.kr/shopimages/sungmo9160/0090010004832.jpg?1665473103',
		cancel: false,
		active: false,
		log: {
			times: 3,
			startTime: new Date(),
			endTime: new Date(),
			recommendStartDate: new Date(),
			recommendEndDate: new Date(),
			content: 'ㅎㅇ',
		},
	},
	{
		sid: 2,
		cid: 3,
		user: '누구냐',
		greenmate: '이금규띠',
		subscribe: '너와 나의 선인장 클래스',
		date: new Date('2023-08-15'),
		thumbnail: 'https://www.flowerrepublic.co.kr/shopimages/sungmo9160/0090010004832.jpg?1665473103',
		cancel: false,
		active: false,
		log: {
			times: 4,
			startTime: new Date(),
			endTime: new Date(),
			recommendStartDate: new Date(),
			recommendEndDate: new Date(),
			content: 'ㅎㅇ',
		},
	},
];

export const dummybanner: IBanner[] = [
	{
		id: 0,
		src: 'https://firebasestorage.googleapis.com/v0/b/localsharing-6682b.appspot.com/o/001.png?alt=media&token=c00247ae-eaf9-4287-8190-5ca10424314b',
	},
	{
		id: 1,
		src: 'https://firebasestorage.googleapis.com/v0/b/localsharing-6682b.appspot.com/o/002.png?alt=media&token=592440be-59f7-41fe-afa7-bf0d1e22815d',
	},
	{
		id: 3,
		src: 'https://firebasestorage.googleapis.com/v0/b/localsharing-6682b.appspot.com/o/003.png?alt=media&token=a0193154-cbf8-443f-9535-e170f0e9224d',
	},
	{
		id: 4,
		src: 'https://firebasestorage.googleapis.com/v0/b/localsharing-6682b.appspot.com/o/004.png?alt=media&token=0ad16aa8-5954-4f60-8185-e7f19ddaeaac',
	},
];

export const dummyProduct: IProduct[] = [
	{
		pid: 0,
		title: '누구나 쉽게 키우는 몬스테라 클래스',
		thumbnail: 'https://www.flowerrepublic.co.kr/shopimages/sungmo9160/0090010004832.jpg?1665473103',
		info: {
			period: 3,
			level: 3,
			price: 8000,
		},
	},
	{
		pid: 1,
		title: '스투키 일주일 클래스',
		thumbnail:
			'https://mblogthumb-phinf.pstatic.net/20160820_73/oneflora_1471684049417Ko98B_JPEG/image_9540627681471684031922.jpg?type=w800',
		info: {
			period: 2,
			level: 2,
			price: 12000,
		},
	},
	{
		pid: 2,
		title: '싸피 방울토마토 짱짱 클래스',
		thumbnail: 'https://gardening.godohosting.com/2018/mfset/redcherrytomato_01.jpg',
		info: { period: 1, level: 4, price: 12000 },
	},
];

export const ProductDetail: IProductDetail[] = [
	{
		pid: 0,
		title: '누구나 쉽게 키우는 몬스테라 클래스',
		info: {
			price: 20000,
			target: '초심자',
			consultCount: '총 5회 / 잔여 3회',
			kitTool: '토양, 영양제, 허브, 삽',
		},
	},
	{
		pid: 1,
		title: '스투키 일주일 클래스',
		info: {
			price: 12000,
			target: '중급자',
			consultCount: '총 5회 / 잔여 4회',
			kitTool: '토양, 영양제, 허브, 삽',
		},
	},
	{
		pid: 2,
		title: '싸피 방울토마토 짱짱 클래스',
		info: {
			price: 8000,
			target: '왕초보',
			consultCount: '총 8회 / 잔여 4회',
			kitTool: '토양, 영양제, 허브, 삽',
		},
	},
];

export const dummySubscribeDetail: ISubscribeDetail = {
	sid: 0,
	startDate: '2023-04-23',
	title: '누구나 쉽게 키우는 몬스테라 클래스',
	info: {
		consultingCnt: 4,
		consultingRemainCnt: 3,
		consultingDate: '2023-08-02',
		consultingCancel: false,
		consultingActive: true,
		consultingTime: 1,
	},
	state: 'wait',
	thumbnail: 'https://www.flowerrepublic.co.kr/shopimages/sungmo9160/0090010004832.jpg?1665473103',
	endDate: '202-05-23',
	plant: '몬스테라',
	greenmate: '김싸피', // 담당 그린메이트
	embeddedInfo: [
		{
			date: '2023/07/17',
			time: '22:00',
			temp: 36,
			humidity: 17,
			soil: 25,
		},
		{
			date: '2023/07/18',
			time: '22:00',
			temp: 36,
			humidity: 17,
			soil: 25,
		},
		{
			date: '2023/07/19',
			time: '22:00',
			temp: 36,
			humidity: 17,
			soil: 25,
		},
		{
			date: '2023/07/20',
			time: '22:00',
			temp: 36,
			humidity: 17,
			soil: 25,
		},
		{
			date: '2023/07/21',
			time: '22:00',
			temp: 36,
			humidity: 17,
			soil: 25,
		},
		{
			date: '2023/07/22',
			time: '22:00',
			temp: 36,
			humidity: 17,
			soil: 25,
		},
		{
			date: '2023/07/23',
			time: '22:00',
			temp: 36,
			humidity: 17,
			soil: 25,
		},
	],
};

export const CONSULTING_HISTORY_LIST: IConsultingHistory[] = [
	{
		consultingDate: '2023-07-04 (월) 14:00',
		endDate: '2023-07-04 (월) 14:30',
		bookingState: 'join',
		recommendDate: '2023-07-24 ~ 2023-07-31',
		consultingComment:
			'지금 물을 너무 안 주고 계세요.\n물은 하루에 2번 종이컵 반 만큼 주시고 가급적이면 주기적인 시간에 주세요.',
	},
	{
		consultingDate: '2023-07-04 (월) 14:00',
		endDate: '',
		bookingState: 'notJoin',
		recommendDate: '',
		consultingComment: '',
	},
	{
		consultingDate: '2023-07-04 (월) 14:00',
		endDate: '2023-07-04 (월) 14:30',
		bookingState: 'join',
		recommendDate: '2023-07-24 ~ 2023-07-31',
		consultingComment:
			'지금 물을 너무 안 주고 계세요.\n물은 하루에 2번 종이컵 반 만큼 주시고 가급적이면 주기적인 시간에 주세요.',
	},
];

// 예약 가능/불가능 시간 데이터
export const tempTimeStatusList = [
	true,
	false,
	false,
	true,
	false,
	false,
	true,
	true,
	false,
	true,
	true,
	false,
	false,
	true,
	false,
	true,
	true,
	true,
	false,
	true,
];
