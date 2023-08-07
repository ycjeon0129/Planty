import { atom } from 'recoil';
import {
	ConsultingDevice,
	ConsultingPublisher,
	ConsultingSession,
	ConsultingStreamManager,
	ConsultingSubscribers,
} from 'types/consulting';

export const consultingSessionState = atom<ConsultingSession | null>({
	key: 'consultingSessionState',
	default: null,
});

export const consultingSubscribersState = atom<ConsultingSubscribers | null>({
	key: 'ConsultingSubscribersState',
	default: null,
});

export const consultingDeviceState = atom<ConsultingDevice | null>({
	key: 'ConsultingDeviceState',
	default: null,
});

export const consultingPublisherState = atom<ConsultingPublisher | null>({
	key: 'ConsultingPublisherState',
	default: null,
});

export const consultingStreamManagerState = atom<ConsultingStreamManager | null>({
	key: 'ConsultingStreamManagerState',
	default: null,
});
