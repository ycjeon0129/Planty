import React, { useState, useEffect } from 'react';
// import { OpenVidu, Session, Publisher, Device, Subscriber, StreamManager } from 'openvidu-browser';
import OpenViduVideo from 'components/atoms/consulting/OpenViduVideo/OpenViduVideo';
import VideoConsultingPageLayout from 'components/layout/Page/VideoConsultingPageLayout/VideoConsultingPageLayout';
import VideoConsultingMenu from 'components/organisms/common/ChatButtonList/VideoConsultingMenu';
import { OpenVidu, Session, Subscriber } from 'openvidu-browser';
import { getToken } from 'utils/api/consulting';

const mySessionId = 'TESTEST';
const myName = 'Test1';

function VideoConsultingPage() {
	// const [mySessionId, setMySessionId] = useState<string>('TTTTEST'); // 가상 룸
	// const [myUserName, setMyUserName] = useState<string>('Test1'); // 유저명
	// const [OV, setOV] = useState<OpenVidu | null>(null); // 오픈비두
	const [session, setSession] = useState<Session | undefined>(undefined); // 가상 룸
	const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
	// const [publisher, setPublisher] = useState<Publisher | undefined>(undefined);
	// const [mainStreamManager, setMainStreamManager] = useState<StreamManager | undefined>(undefined);
	// const [currentVideoDevice, setCurrentVideoDevice] = useState<Device | undefined>();

	const joinSession = () => {
		const OV = new OpenVidu();
		const newSession = OV.initSession();
		setSession(newSession);
		newSession.on('streamCreated', (event) => {
			// OpenVidu 세션에서 새로운 스트림을 구독(subscribe)할 때 사용
			// 구독은 다른 참가자가 생성한 비디오 또는 오디오 스트림을 현재 사용자가 수신하여 화면에 표시하거나 재생하는 것을 의미
			// .subscribe(구독할 스트림, 구독할 스트림을 화면에 표시할 HTML 요소)
			const subscriber = newSession.subscribe(event.stream, undefined);
			console.log('=====================================');
			console.log('subscriber', subscriber);
			console.log('=====================================');
			setSubscribers((prev) => [...prev, subscriber]);
		});

		getToken(mySessionId).then((token) => {
			newSession
				.connect(token, { clientData: myName })
				.then(async () => {
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

					// const devices = await OV.getDevices();
					// const videoDevices = devices.filter((device) => device.kind === 'videoinput');
					// const currentVideoDeviceId = initPublisher.stream.getMediaStream().getVideoTracks()[0].getSettings().deviceId;
					// setCurrentVideoDevice(videoDevices.find((device) => device.deviceId === currentVideoDeviceId));
					// setMainStreamManager(initPublisher);
					// setPublisher(initPublisher);
				})
				.catch((error) => {
					console.log('There was an error connecting to the session:', error.code, error.message);
				});
		});
	};

	useEffect(() => {
		if (session === undefined) {
			joinSession();
		}
	});

	return (
		<VideoConsultingPageLayout>
			{/* <OpenViduVideo streamManager={null} />
			<OpenViduVideo streamManager={null} /> */}
			{subscribers.map((sub) => (
				<div key={sub.id}>
					<OpenViduVideo streamManager={sub} />
				</div>
			))}

			<VideoConsultingMenu />
		</VideoConsultingPageLayout>
	);
}

export default VideoConsultingPage;
