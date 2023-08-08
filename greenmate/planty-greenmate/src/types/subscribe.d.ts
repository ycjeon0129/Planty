export interface ISubscribe {
	sid: number;
	title: string;
	thumbnail: string;
	subscriberCnt: number;
	startDate: string;
	endDate: string;
}

export interface ISubscribeDetail extends ISubscribe {
	price: number;
	plant: string;
	level: number;
	consultingCnt: number;
}

interface IConsulting {
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
