// 구독샵 상품
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

export interface IProductDetail {
	pid: number;
	title: string;
	info: {
		price: number;
		target: string;
		consultCount: string;
		kitTool: string;
	};
}
