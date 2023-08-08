export interface IConsultingSummary {
	consultCount: string;
	consultDate: string;
}

// 컨설팅 예약건
export interface IConsulting {
	sid: number;
	cid: number;
	date: Date;
	active: boolean;
	cancel: boolean;
	user: string;
	greenmate: string;
	subscribe: string;
	thumbnail: string;
	log: {
		times: number;
		content: string;
		startTime: Date;
		endTime: Date;
		recommendStartDate: Date;
		recommendEndDate: Date;
	};
}

// 홈 광고 배너
export interface IBanner {
	id: number;
	src: string;
}

// 구독샵 상품
export interface IProduct {
	pid: number;
	title: string;
	thumbnail: string;
	info: {
		period: number;
		level: number;
		price: number;
	};
}

export interface IProductDetail {
	pid: number;
	title: string;
	info: {
		price: number;
		target: string;
		consultCount: string;
		kitTool: string;
	};
}
