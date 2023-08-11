/**
 * 구독 전체 조회 시 response
 */
export interface ISubscribeResponse {
	sid: number;
	startDate: string;
	end: boolean;
	title: string;
	consultingCnt: number;
	consultingRemainCnt: number;
	consultingDate: string;
	consultingCancel: boolean;
	consultingActive: boolean;
	consultingTime: number;
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
	title: string;
	info: IConsultingSummary;
	state: string;
	thumbnail: string;
}

/**
 * 구독정보에 포함되는 컨설팅 정보
 */
export interface IConsultingSummary {
	consultingCnt: number;
	consultingRemainCnt: number;
	consultingDate: string;
	consultingCancel: boolean;
	consultingActive: boolean;
	consultingTime: number;
}

export interface ISubscribeDetail extends ISubscribe {
	endDate: string;
	plant: string;
	greenmate: string;
	embeddedInfo: IEmbeddedInfo[];
}

export interface ISubscriber {}
