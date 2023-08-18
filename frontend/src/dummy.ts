import { IBanner } from 'types/common/global';
import { IProduct } from 'types/domain/product';
import { ISubscribeDetail } from 'types/domain/subscribe';

export const dummybanner: IBanner[] = [
	{
		id: 1,
		src: 'https://firebasestorage.googleapis.com/v0/b/localsharing-6682b.appspot.com/o/004.png?alt=media&token=0ad16aa8-5954-4f60-8185-e7f19ddaeaac',
	},
	{
		id: 2,
		src: 'https://firebasestorage.googleapis.com/v0/b/localsharing-6682b.appspot.com/o/003.png?alt=media&token=a0193154-cbf8-443f-9535-e170f0e9224d',
	},
	{
		id: 3,
		src: 'https://firebasestorage.googleapis.com/v0/b/localsharing-6682b.appspot.com/o/001.png?alt=media&token=c00247ae-eaf9-4287-8190-5ca10424314b',
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

export const dummySubscribeDetail: ISubscribeDetail = {
	sid: 0,
	startDate: '2023-04-23',
	title: '누구나 쉽게 키우는 몬스테라 클래스',
	end: false,
	consultingCnt: 4,
	consultingRemainCnt: 3,
	nearConsulting: {
		cid: 2,
		date: '2023-08-02',
		cancel: false,
		active: true,
		time: 1,
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
