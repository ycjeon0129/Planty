export interface IConsultingHistory {
	consultingDate: string;
	endDate: string;
	bookingState: string;
	recommendDate: string;
	consultingComment: string;
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
