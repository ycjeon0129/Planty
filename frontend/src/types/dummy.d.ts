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

export interface IBanner {
	id: number;
	src: string;
}

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
