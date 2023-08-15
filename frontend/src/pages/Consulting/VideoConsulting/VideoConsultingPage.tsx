import React, { useState, useEffect } from 'react';
// import { OpenVidu, Session, Publisher, Device, Subscriber, StreamManager } from 'openvidu-browser';
import OpenViduVideo from 'components/atoms/consulting/OpenViduVideo/OpenViduVideo';
import VideoConsultingPageLayout from 'components/layout/Page/VideoConsultingPageLayout/VideoConsultingPageLayout';
import VideoConsultingMenu from 'components/organisms/consulting/VideoConsultingMenu/VideoConsultingMenu';
import { OpenVidu, Publisher, Session, StreamEvent, Subscriber } from 'openvidu-browser';
import ConsultingLoadingPageLayout from 'components/layout/Page/ConsultingLoadingPageLayout/ConsultingLoadingPageLayout';
import { ReactComponent as CamOffIcon } from 'assets/icons/consultingMenu/VideoOff.svg';
import { ReactComponent as MicOffIcon } from 'assets/icons/consultingMenu/MicOff.svg';
import useMovePage from 'hooks/common/useMovePage';
import { useRecoilState } from 'recoil';
import consultingSessionState from 'recoil/consultingSession';
import { IConsultingSession } from 'types/common/request';
// import { getToken } from 'utils/api/openVidu';
// import useUser from 'hooks/useUser';
// import PlantChart from 'components/organisms/subscribe/PlantChart/PlantChart';

const userName = 'user1';

function VideoConsultingPage() {
	// const user = useUser();
	const [consultingSession] = useRecoilState(consultingSessionState); // 현재 요청 정보 (webRTCType, token)
	const { goBack } = useMovePage();
	const [session, setSession] = useState<Session | undefined>(undefined); // 가상 룸
	const [subscriber, setSubscriber] = useState<Subscriber | undefined>(undefined);
	const [publisher, setPublisher] = useState<Publisher | undefined>(undefined);
	const [webcamEnabled, setWebcamEnabled] = useState<boolean>(true);
	const [microphoneEnabled, setMicrophoneEnabled] = useState<boolean>(true);
	const [chartDisplayOn, setChartDisplayOn] = useState<boolean>(false);
	const [isLoading, setLoading] = useState<boolean>(true);

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

	const toggleChartDisplay = () => {
		setChartDisplayOn(!chartDisplayOn);
	};

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

			// const token = await getToken();
			const { token } = consultingSession as IConsultingSession;
			await newSession.connect(token, { clientData: userName });

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
	}, [webcamEnabled, microphoneEnabled, session, consultingSession]);

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
		return <ConsultingLoadingPageLayout />;
	}

	return (
		<VideoConsultingPageLayout>
			{subscriber && <OpenViduVideo streamManager={subscriber} />}
			<>
				{publisher && webcamEnabled ? <OpenViduVideo streamManager={publisher} /> : <CamOffIcon />}
				{!microphoneEnabled && <MicOffIcon />}
			</>
			<VideoConsultingMenu
				toggleWebcam={toggleWebcam}
				toggleMicrophone={toggleMicrophone}
				toggleChartDisplay={toggleChartDisplay}
				exitConsulting={exitConsulting}
			/>
			{chartDisplayOn && (
				<div className="chart-display-wrap">
					<h3>온습도 정보</h3>
					{/* TODO : 현재 Sid를 얻어올 수 없어서 차트 데이터 요청을 못날림. sid 추가해야 함. */}
					{/* <PlantChart  /> */}
				</div>
			)}
		</VideoConsultingPageLayout>
	);
}

export default VideoConsultingPage;
