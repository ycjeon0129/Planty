// 예약
export interface IBooking {
	cid: number;
	sid: number;
	user: string;
	greenmate: string;
	title: string;
	date: string;
	time: number;
	cancel: boolean;
	active: boolean;
}

export type SelectedDate = Date;
