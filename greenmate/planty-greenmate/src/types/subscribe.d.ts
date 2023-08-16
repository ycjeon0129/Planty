export interface ISubscribe {
	consultingCnt: number;
	name: string;
	period: number;
	spid: number;
	thumbnail: string;
	subscriberCnt: number;
}

export interface ISubscribeDetail extends ISubscribe {
	price: number;
	plant: string;
	level: number;
	consultingCnt: number;
}

export interface IConsulting {
	cid: number;
	sid: number;
	time: number;
	date: string;
	cancel: boolean;
	active: boolean;
	subscribeProductName: string;
	recommendedStartDate: string;
	recommendedEndDate: string;
	advice: string;
	startTime: string;
	endTime: string;
}

export interface IBooking {
	cid: number;
	sid: number;
	date: string;
	time: number;
	greenmate: string;
	user: string;
	title: string;
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
