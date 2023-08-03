import { ISubscribe, IProduct, IBanner, IProductDetail } from 'types/dummy';

const dummySubscribe: ISubscribe[] = [
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

export const dummybanner: IBanner[] = [
	{
		id: 0,
		src: 'https://file.miricanvas.com/template_thumb/2021/10/08/16/10/khqn744slrkwk3p3/thumb.jpg?size=350',
	},
	{
		id: 1,
		src: 'https://file.miricanvas.com/template_thumb/2021/09/09/16/40/k6pj046gvbbnp2bu/thumb.jpg?size=350',
	},
	{
		id: 2,
		src: '	https://file.miricanvas.com/template_thumb/2021/08/30/13/00/kiqlwkppz7hx4u8v/thumb.jpg?size=350',
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
		info: {
			price: 20000,
			target: '초심자',
			consultCount: '총 5회 / 잔여 3회',
			kitTool: '토양 영양제 허브 삽',
		},
	},
	{
		pid: 1,
		info: {
			price: 12000,
			target: '중급자',
			consultCount: '총 5회 / 잔여 4회',
			kitTool: '토양 영양제 허브 삽',
		},
	},
	{
		pid: 2,
		info: {
			price: 8000,
			target: '왕초보',
			consultCount: '총 8회 / 잔여 4회',
			kitTool: '토양 영양제 허브 삽',
		},
	},
];
export default dummySubscribe;
