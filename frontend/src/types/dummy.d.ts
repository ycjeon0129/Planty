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

interface IEmbeddedDate {
	date: string;
	temperature: number;
	humidity: number;
	soilHumidity: number;
}

export interface ISubscribeDetail extends ISubscribe {
	detailInfo: {
		subscribeStartDate: string;
		subscribeEndDate: string;
		GMNickname: string; // 담당 그린메이트
		supplementsCount: number; // 영양제 개수
	};
	embeddedData: IEmbeddedDate[];
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
