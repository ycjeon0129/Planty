import { atom } from 'recoil';
import { IConsultingSession } from 'types/common/request';

const consultingSessionState = atom<IConsultingSession | null>({
	key: 'consultingSessionState',
	default: null,
});

export default consultingSessionState;
