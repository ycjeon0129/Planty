// 사용자 구독정보

export interface ISubscribe {
	sid: number;
	title: string;
	state: string;
	thumbnail: string;
	info: IConsultingSummary;
}

export interface IConsultingSummary {
	startDate: string;
	consultCount: string;
	consultDate: string;
}

export interface ISubscribeDetail extends ISubscribe {
	detailInfo: {
		subscribeStartDate: string;
		subscribeEndDate: string;
		GMNickname: string; // 담당 그린메이트
		supplementsCount: number; // 영양제 개수
	};
	embeddedData: IEmbeddedDate[];
}

interface IEmbeddedDate {
	date: string;
	temperature: number;
	humidity: number;
	soilHumidity: number;
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
	info: {
		price: number;
		target: string;
		consultCount: string;
		kitTool: string;
	};
}
