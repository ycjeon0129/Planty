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
		message: '미참여',
	},
	cancel: {
		color: 'danger',
		message: '예약취소',
	},
	cancelConsult: {
		color: 'disabled',
		message: '예약취소',
	},
	chat: {
		color: 'primary',
		message: '채팅',
	},
	video: {
		color: 'danger',
		message: '화상',
	},
};

export default SUBSCRIBE_STATES;
