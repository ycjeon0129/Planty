import React, { useEffect, useState } from 'react';
import { ReactComponent as CamOffIcon } from 'assets/icons/consultingMenu/VideoOff.svg';
import { ReactComponent as MicOffIcon } from 'assets/icons/consultingMenu/MicOff.svg';
import VideoPageLayout from 'components/layout/page/Consulting/VideoPageLayout/VideoPageLayout';
import Header from 'components/organisms/common/Header/Header';
import OpenViduVideo from 'components/organisms/consulting/OpenViduVideo/OpenViduVideo';
import VideoConsultingMenu from 'components/organisms/consulting/VideoConsultingMenu/VideoConsultingMenu';
import useMovePage from 'hooks/useMovePage';

import { OpenVidu, Publisher, Session, StreamEvent, Subscriber } from 'openvidu-browser';
import { getToken } from 'utils/api/openVidu';
import { Link } from 'react-router-dom';
import LoadingPage from './LoadingPage';

function VideoPage() {
	const { goBack } = useMovePage();
	const [session, setSession] = useState<Session | undefined>(undefined); // 가상 룸
	const [subscriber, setSubscriber] = useState<Subscriber | undefined>(undefined);
	const [publisher, setPublisher] = useState<Publisher | undefined>(undefined);
	const [webcamEnabled, setWebcamEnabled] = useState<boolean>(true);
	const [microphoneEnabled, setMicrophoneEnabled] = useState<boolean>(true);
	const [isLoading, setLoading] = useState<boolean>(true);

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

	const toggleMicrophone = () => {
		if (publisher) {
			const newMicrophoneState = !microphoneEnabled;
			publisher.publishAudio(newMicrophoneState);
			setMicrophoneEnabled(newMicrophoneState);
		}
	};

	const toggleWebcam = () => {
		if (publisher) {
			const newWebcamState = !webcamEnabled;
			publisher.publishVideo(newWebcamState);
			setWebcamEnabled(newWebcamState);
		}
	};

	const exitConsulting = () => {
		if (session) {
			alert('세션이 종료되었습니다.');
			session.off('streamCreated', handleStreamCreated);
			session.off('streamDestroyed', handleStreamDestroyed);
			session.disconnect();
			goBack();
		} else {
			alert('종료된 세션입니다.');
			goBack();
		}
	};

	useEffect(() => {
		const joinSession = async () => {
			setLoading(true);
			const OV = new OpenVidu();
			const newSession = OV.initSession();
			setSession(newSession);

			const token = await getToken();
			await newSession.connect(token);

			const initPublisher = await OV.initPublisherAsync(undefined, {
				audioSource: undefined, // The source of audio. If undefined default microphone
				videoSource: undefined, // The source of video. If undefined default webcam
				publishAudio: microphoneEnabled, // Whether you want to start publishing with your audio unmuted or not
				publishVideo: webcamEnabled, // Whether you want to start publishing with your video enabled or not
				frameRate: 30, // The frame rate of your video
				insertMode: 'APPEND', // How the video is inserted in the target element 'video-container'
				mirror: false, // Whether to mirror your local video or not
			});
			newSession.publish(initPublisher);
			setPublisher(initPublisher);
			setLoading(false);
		};

		if (!session) {
			joinSession();
		}
	}, [webcamEnabled, microphoneEnabled, session]);

	useEffect(() => {
		if (session) {
			session.on('streamCreated', handleStreamCreated);
			session.on('streamDestroyed', handleStreamDestroyed);
		}

		return () => {
			if (session) {
				session.off('streamCreated', handleStreamCreated);
				session.off('streamDestroyed', handleStreamDestroyed);

				// 상담이 끝나면 세션 종료
				// session.disconnect();
			}
		};
	});

	if (isLoading || !publisher || !subscriber) {
		return <LoadingPage />;
	}

	return (
		<VideoPageLayout>
			<div style={{ display: 'flex' }}>
				<Header />
				<Link to="/">홈으로</Link>
			</div>
			{subscriber && <OpenViduVideo streamManager={subscriber} />}
			<>
				{publisher && webcamEnabled ? <OpenViduVideo streamManager={publisher} /> : <CamOffIcon />}
				{!microphoneEnabled && <MicOffIcon />}
			</>
			<VideoConsultingMenu
				toggleWebcam={toggleWebcam}
				toggleMicrophone={toggleMicrophone}
				exitConsulting={exitConsulting}
			/>
		</VideoPageLayout>
	);
}

export default VideoPage;
