import React, { useState, useEffect } from 'react';
// import { OpenVidu, Session, Publisher, Device, Subscriber, StreamManager } from 'openvidu-browser';
import OpenViduVideo from 'components/atoms/consulting/OpenViduVideo/OpenViduVideo';
import VideoConsultingPageLayout from 'components/layout/Page/VideoConsultingPageLayout/VideoConsultingPageLayout';
import VideoConsultingMenu from 'components/organisms/common/ChatButtonList/VideoConsultingMenu';
import { OpenVidu, Publisher, Session, StreamEvent, Subscriber } from 'openvidu-browser';
import { getToken } from 'utils/api/consulting';

const mySessionId = 'TESTEST';
const myName = 'Test1';

function VideoConsultingPage() {
	const [session, setSession] = useState<Session | undefined>(undefined); // 가상 룸
	const [subscriber, setSubscriber] = useState<Subscriber | undefined>(undefined);
	const [publisher, setPublisher] = useState<Publisher | undefined>(undefined);

	useEffect(() => {
		const joinSession = async () => {
			const OV = new OpenVidu();
			const newSession = OV.initSession();
			setSession(newSession);

			const token = await getToken(mySessionId);
			await newSession.connect(token, { clientData: myName });

			const initPublisher = await OV.initPublisherAsync(undefined, {
				audioSource: undefined, // The source of audio. If undefined default microphone
				videoSource: undefined, // The source of video. If undefined default webcam
				publishAudio: true, // Whether you want to start publishing with your audio unmuted or not
				publishVideo: true, // Whether you want to start publishing with your video enabled or not
				frameRate: 30, // The frame rate of your video
				insertMode: 'APPEND', // How the video is inserted in the target element 'video-container'
				mirror: false, // Whether to mirror your local video or not
			});
			newSession.publish(initPublisher);
			setPublisher(initPublisher);
		};

		if (!session) {
			joinSession();
		}
	}, [session]);

	useEffect(() => {
		const handleStreamCreated = (event: StreamEvent) => {
			if (session) {
				const newSubscriber = session.subscribe(event.stream, undefined);
				setSubscriber(newSubscriber);
			}
		};

		const handleStreamDestroyed = () => {
			if (subscriber) {
				setSubscriber(undefined);
			}
		};

		if (session) {
			session.on('streamCreated', handleStreamCreated);
			session.on('streamDestroyed', handleStreamDestroyed);
		}

		return () => {
			if (session) {
				session.off('streamCreated', handleStreamCreated);
				session.off('streamDestroyed', handleStreamDestroyed);
			}
		};
	});

	return (
		<VideoConsultingPageLayout>
			{subscriber && <OpenViduVideo streamManager={subscriber} />}
			{publisher && <OpenViduVideo streamManager={publisher} />}
			<VideoConsultingMenu />
		</VideoConsultingPageLayout>
	);
}

export default VideoConsultingPage;
