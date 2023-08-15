/**
 * 구독 전체 조회 시 response
 */
export interface ISubscribeResponse {
	sid: number;
	startDate: string;
	endDate: string;
	end: boolean;
	title: string;
	thumbnail: string;
	consultingCnt: number;
	consultingRemainCnt: number;
	greenmate: string;
	// 가까운 컨설팅에 대한 정보
	nearConsulting: {
		cid: number;
		date: string;
		cancel: boolean;
		active: boolean;
		time: number;
	};
}

/**
 * 구독 상세 조회 시 response
 */
export interface ISubscribeDetailResponse extends ISubscribeResponse {
	endDate: string;
	plant: string;
	greenmate: string;
	embeddedInfo: IEmbeddedInfo[];
}

/**
 * 임베디드 정보 (온/습도 등)
 */
export interface IEmbeddedInfo {
	date: string;
	time: string;
	temp: number;
	humidity: number;
	soil: number;
}

/**
 * 구독 목록 자료형
 */
export interface ISubscribe {
	sid: number;
	startDate: string;
	endDate: string;
	end: boolean;
	title: string;
	state: string;
	thumbnail: string;
	consultingCnt: number;
	consultingRemainCnt: number;
	greenmate: string;
	nearConsulting: IConsultingSummary;
}

/**
 * 구독정보에 포함되는 컨설팅 정보
 */
export interface IConsultingSummary {
	cid: number;
	date: string;
	cancel: boolean;
	active: boolean;
	time: number;
}

export interface ISubscribeDetail extends ISubscribe {
	plant: string;
	embeddedInfo: IEmbeddedInfo[];
}

export interface ISubscriber {}
