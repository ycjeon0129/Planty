export interface IConsultingHistory {
	consultingDate: string;
	endDate: string;
	bookingState: string;
	recommendDate: string;
	consultingComment: string;
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

export interface IConsultingSummary {
	consultCount: string;
	consultDate: string;
}
