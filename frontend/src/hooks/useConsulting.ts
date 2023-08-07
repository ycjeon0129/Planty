import { useState } from 'react';

const useConsulting = <T>() => {
	const [consultingSession, setConsultingSession] = useState<T>();
	const [consultingSubscribers, setConsultingSubscribers] = useState<T>();
	const [consultingDevice, setConsultingDevice] = useState<T>();
	const [consultingPublisher, setConsultingPublisher] = useState<T>();
	const [consultingMainStreamManager, setConsultingMainStreamManager] = useState<T>();

	return {
		values: [
			consultingSession,
			consultingSubscribers,
			consultingDevice,
			consultingPublisher,
			consultingMainStreamManager,
		],
		functions: [
			setConsultingSession,
			setConsultingSubscribers,
			setConsultingDevice,
			setConsultingPublisher,
			setConsultingMainStreamManager,
		],
	};
};

export default useConsulting;
