import { IBanner } from 'types/common/global';
import { IConsulting, IConsultingHistory } from 'types/domain/consulting';
import { IProduct, IProductDetail } from 'types/domain/product';
import { ISubscribeDetail } from 'types/domain/subscribe';

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
		spid: 1,
		name: '방울방울 방울 토마토',
		imgUrl:
			'https://i.namu.wiki/i/7CrIrJaPPWRwMaCfZhyjVpjXBL5c7_Nn_lGZBQ-R3JNh_59xwZA92LllKCpGx1yti4Bxn1bt13-GH4ee_8llUA.webp',
		period: 3,
		plantName: '토마토',
		price: 20000,
		level: 2,
	},
	{
		spid: 2,
		name: '테스트테스트 양파',
		imgUrl:
			'https://i.namu.wiki/i/7CrIrJaPPWRwMaCfZhyjVpjXBL5c7_Nn_lGZBQ-R3JNh_59xwZA92LllKCpGx1yti4Bxn1bt13-GH4ee_8llUA.webp',
		period: 5,
		plantName: '양파',
		price: 24000,
		level: 4,
	},
	{
		spid: 3,
		name: '토마토를 토막내면 토막 토마토',
		imgUrl:
			'https://i.namu.wiki/i/7CrIrJaPPWRwMaCfZhyjVpjXBL5c7_Nn_lGZBQ-R3JNh_59xwZA92LllKCpGx1yti4Bxn1bt13-GH4ee_8llUA.webp',
		period: 2,
		plantName: '토마토',
		price: 15000,
		level: 3,
	},
];

export const ProductDetail: IProductDetail = {
	spid: 1, // 구독상품 식별키
	name: '방울방울 방울 토마토', // 구독상품명
	imgUrl:
		'https://i.namu.wiki/i/7CrIrJaPPWRwMaCfZhyjVpjXBL5c7_Nn_lGZBQ-R3JNh_59xwZA92LllKCpGx1yti4Bxn1bt13-GH4ee_8llUA.webp', // 이미지URL
	period: 3, // 구독 기간
	plantName: '토마토', // 식물이름
	price: 20000, // 가격
	level: 2, // 난이도

	tonicPeriod: 4, // 식물 영양제 제공 주기 (주)
	size: 0, // 크기. 소(0), 중(1), 대(2)
	place: 0, // 생육 장소. 무관(0), 실내(1), 실외(2)
	eatable: 1, // 식용 여부. 식용(1), 비식용(0)

	greenmate: '김싸피', // 담당그린메이트
	consultingCnt: 4, // 컨설팅 횟수
	description:
		'https://thumbnail8.coupangcdn.com/thumbnails/remote/q89/image/retail/images/715188549854504-0eec4459-46be-444d-836a-7cc57cf7f5ff.jpg', // 상세설명
};

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
