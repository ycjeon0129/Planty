import React from 'react';
import { OpenVidu, StreamEvent } from 'openvidu-browser';
import { ISubscriber } from 'types/domain/subscribe';
import { getToken } from 'utils/api/openVidu';
import useConsulting from 'hooks/useConsulting';
// import OpenViduVideo from 'components/atoms/consulting/OpenViduVideo/OpenViduVideo';

function WaitPage() {
	const [, , , , consultingMainStreamManager] = useConsulting().values;
	const [setConsultingSession, setSubscribers, setDevice, setPublisher, setStreamManager] = useConsulting().functions;

	// 세션 생성
	const createSession = () => {
		const openVidu = new OpenVidu();
		const session = openVidu.initSession();
		const subscribers: ISubscriber[] = [];

		setConsultingSession(session);

		if (session) {
			// 스트림 생성 이벤트
			session.on('streamCreated', (event: StreamEvent) => {
				const subscriber: ISubscriber = session.subscribe(event.stream, undefined);
				subscribers.push(subscriber);
				setSubscribers(subscribers);
			});

			// 스트림 소멸 이벤트
			session.on('streamDestroyed', (event: StreamEvent) => {
				console.log('deleteSubscriber', event);
			});
		}

		getToken(`TTTTEST`).then((token) => {
			const clientData = { clientData: '전인혁' }; // 유저 닉네임
			session
				.connect(token, clientData)
				.then(async () => {
					const initPublisher = await openVidu.initPublisherAsync(undefined, {
						audioSource: undefined, // The source of audio. If undefined default microphone
						videoSource: undefined, // The source of video. If undefined default webcam
						publishAudio: true, // Whether you want to start publishing with your audio unmuted or not
						publishVideo: true, // Whether you want to start publishing with your video enabled or not
						resolution: '500x800', // The resolution of your video
						frameRate: 30, // The frame rate of your video
						insertMode: 'APPEND', // How the video is inserted in the target element 'video-container'
						mirror: false, // Whether to mirror your local video or not
					});

					session.publish(initPublisher);
					const devices = await openVidu.getDevices();
					const videoDevices = devices.filter((device) => device.kind === 'videoinput');
					const currentVideoDeviceId = initPublisher.stream.getMediaStream().getVideoTracks()[0].getSettings().deviceId;
					setDevice(videoDevices.find((device) => device.deviceId === currentVideoDeviceId));
					setStreamManager(initPublisher);
					setPublisher(initPublisher);
				})
				.catch((error) => {
					console.error('에러', error);
				});
		});
	};

	return (
		<div>
			{consultingMainStreamManager !== undefined ? (
				<div id="main-video" className="col-md-6">
					{/* <OpenViduVideo streamManager={consultingMainStreamManager as StreamManager} /> */}
				</div>
			) : null}
			<button type="button" onClick={createSession}>
				입장하기
			</button>
		</div>
	);
}

export default WaitPage;
