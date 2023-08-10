export type AccessToken = {
	uid: number;
};

export type SetAuthBody = {
	auth: string;
	nickname: string;
	profilePhoto: string;
	shippingAddress: string;
};

export type LoginBody = {
	id: string;
	password: string;
};

export type IAuth = {
	nickname: string;
	id: string;
	status: boolean;
	profilePhoto: string;
	joinDate: string;
	introduce: string;
	currentConsulting: ICurrentConsulting | null;
};

export interface ICurrentConsulting {
	cid: number;
	sid: number | null;
	category: number;
	type: number;
	user: string;
	greenmate: string;
	startTime: string;
	time: number;
}
