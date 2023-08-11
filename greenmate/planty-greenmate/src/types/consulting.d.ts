export interface IConsultingRequest {
	idx: number;
	type: number; // 0이면 채팅, 1이면 화상
	category: number; // 0이면 응급실, 1이면 구독
	user: string;
}

export type ConsultingSession = Session | null;
export type ConsultingSubscribers = ISubscriber[];
export type ConsultingDevice = Device | null;
export type ConsultingPublisher = Publisher | null;
export type ConsultingStreamManager = StreamManager | null;

export type SetConsultingSessionFn = (session: Session) => void;
export type SetonsultingSubscribersFn = (subscribers: ISubscriber[]) => void;
export type SetonsultingDeviceFn = (device: Device) => void;
export type SetonsultingPublisherFn = (publisher: Publisher) => void;
export type SetonsultingMainStreamManagerFn = (streamManager: StreamManager) => void;

export interface ISubscriber {}
