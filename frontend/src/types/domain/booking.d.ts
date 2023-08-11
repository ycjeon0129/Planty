// 예약
export interface IBooking {
	cid: number;
	sid: number;
	user: string;
	greenmate: string;
	title: string;
	date: string;
	time: number;
}

export type SelectedDate = Date;
