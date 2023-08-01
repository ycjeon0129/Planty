export interface ISubscribe {
	sid: number;
	title: string;
	state: string;
	thumbnail: string;
	info: {
		startDate: string;
		consultCount: string;
		consultDate: string;
	};
}
