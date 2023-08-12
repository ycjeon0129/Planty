export interface IConsultingHistory {
	consultingDate: string;
	endDate: string;
	bookingState: string;
	recommendDate: string;
	consultingComment: string;
}

// 컨설팅 예약건
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

export interface IConsultingSummary {
	consultCount: string;
	consultDate: string;
}
