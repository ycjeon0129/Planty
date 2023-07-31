interface ISubscribeStates {
	[key: string]: {
		color: string;
		message: string;
	};
}

const SUBSCRIBE_STATES: ISubscribeStates = {
	wait: {
		color: 'danger',
		message: '예약대기',
	},
	done: {
		color: 'primary',
		message: '예약완료',
	},
	end: {
		color: 'disabled',
		message: '구독종료',
	},
	join: {
		color: 'success',
		message: '진행완료',
	},
	notJoin: {
		color: 'danger',
		message: '미 참여',
	},
};

export default SUBSCRIBE_STATES;
