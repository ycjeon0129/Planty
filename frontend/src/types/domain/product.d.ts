// 구독샵 상품
export interface IProduct {
	spid: number;
	name: string;
	imgUrl: string;
	plantName: string;
	period: number;
	price: number;
	level: number;
}

export interface IProductDetail {
	spid: number;
	name: string; // 구독상품명
	imgUrl: string; // 이미지URL
	period: number; // 구독 기간
	plantName: string; // 식물이름
	price: number; // 가격
	level: number; // 난이도
	size: number; // 크기. 소(0), 중(1), 대(2)
	place: number; // 생육 장소. 무관(0), 실내(1), 실외(2)
	eatable: number; // 식용 여부. 식용(1), 비식용(0)
	greenmate: string; // 담당그린메이트
	consultingCnt: number; // 컨설팅 횟수
	description: string; // 상세설명
}

export interface IProductInfo {
	period: number;
	price: number;
	level: number;
}

export interface IProductDetailInfo {
	price: number;
	level: number;
	consultingCnt: number;
	tonicPeriod: number;
}
