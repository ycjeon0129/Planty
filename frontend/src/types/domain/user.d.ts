export type AccessToken = {
	uid: number;
};

export type SetUserBody = {
	auth: string;
	nickname: string;
	profilePhoto: string;
	shippingAddress: string;
};

export type LoginBody = {
	auth: string;
};

export type IUser = {
	nickname: string;
	auth: string;
	profilePhoto: string;
	joinDate: Date;
	ticketCount: number;
	address: string;
};
