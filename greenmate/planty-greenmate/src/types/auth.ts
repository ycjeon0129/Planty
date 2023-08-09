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
};
