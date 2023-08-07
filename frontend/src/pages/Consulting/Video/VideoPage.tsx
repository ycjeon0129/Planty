import React, { useState, useEffect } from 'react';
import { OpenVidu, Session, Publisher, Device, Subscriber, StreamManager } from 'openvidu-browser';
import OpenViduVideo from 'components/atoms/consulting/OpenViduVideo/OpenViduVideo';
import { getToken } from 'utils/api/consulting';

function VideoPage() {
	const [mySessionId] = useState<string>('TTTTEST');
	const [myUserName] = useState<string>('Test1');
	// const [OV, setOV] = useState<OpenVidu | null>(null);
	const [session, setSession] = useState<Session | undefined>(undefined);
	const [, setMainStreamManager] = useState<StreamManager | undefined>(undefined);
	const [publisher, setPublisher] = useState<Publisher | undefined>(undefined);
	const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
	const [, setCurrentVideoDevice] = useState<Device | undefined>();

	const deleteSubscriber = (e: StreamManager) => {
		console.log('deleteSubscriber', e);
	};

	const joinSession = () => {
		const openvidu = new OpenVidu();
		// setOV(openvidu);

		const newSession = openvidu.initSession();
		setSession(newSession);
		newSession.on('streamCreated', (event) => {
			const subscriber = newSession.subscribe(event.stream, undefined);
			setSubscribers((prevSubscribers) => [...prevSubscribers, subscriber]);
		});

		newSession.on('streamDestroyed', (event) => {
			deleteSubscriber(event.stream.streamManager);
		});

		getToken(mySessionId).then((token) => {
			newSession
				.connect(token, { clientData: myUserName })
				.then(async () => {
					const initPublisher = await openvidu.initPublisherAsync(undefined, {
						audioSource: undefined, // The source of audio. If undefined default microphone
						videoSource: undefined, // The source of video. If undefined default webcam
						publishAudio: true, // Whether you want to start publishing with your audio unmuted or not
						publishVideo: true, // Whether you want to start publishing with your video enabled or not
						resolution: '500x800', // The resolution of your video
						frameRate: 30, // The frame rate of your video
						insertMode: 'APPEND', // How the video is inserted in the target element 'video-container'
						mirror: false, // Whether to mirror your local video or not
					});

					newSession.publish(initPublisher);

					const devices = await openvidu.getDevices();
					const videoDevices = devices.filter((device) => device.kind === 'videoinput');
					const currentVideoDeviceId = initPublisher.stream.getMediaStream().getVideoTracks()[0].getSettings().deviceId;
					setCurrentVideoDevice(videoDevices.find((device) => device.deviceId === currentVideoDeviceId));
					setMainStreamManager(initPublisher);
					setPublisher(initPublisher);
				})
				.catch((error) => {
					console.log('There was an error connecting to the session:', error.code, error.message);
				});
		});
	};

	// const handleChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
	// 	if (e.target.value === undefined || e.target.value.length === 0) {
	// 		alert('값 입력');
	// 		return;
	// 	}
	// 	setMyUserName(e.target.value);
	// };

	// const handleChangeSessionId = (e: React.ChangeEvent<HTMLInputElement>) => {
	// 	if (e.target.value === undefined || e.target.value.length === 0) {
	// 		alert('값 입력');
	// 		return;
	// 	}
	// 	setMySessionId(e.target.value);
	// };

	// const leaveSession = () => {
	// 	const mySession = session;

	// 	if (mySession) {
	// 		mySession.disconnect();
	// 	}
	// };

	// const switchCamera = async () => {
	// 	try {
	// 		if (OV === null) {
	// 			console.log('OV is null');
	// 			return;
	// 		}
	// 		const devices = await OV.getDevices();
	// 		const videoDevices = devices.filter((device) => device.kind === 'videoinput');

	// 		if (videoDevices && currentVideoDevice && videoDevices.length > 1) {
	// 			const newVideoDevice = videoDevices.filter((device) => device.deviceId !== currentVideoDevice.deviceId);

	// 			if (newVideoDevice.length > 0) {
	// 				// Creating a new publisher with specific videoSource
	// 				// In mobile devices the default and first camera is the front one
	// 				const newPublisher = OV.initPublisher(undefined, {
	// 					videoSource: newVideoDevice[0].deviceId,
	// 					publishAudio: true,
	// 					publishVideo: true,
	// 					mirror: true,
	// 				});

	// 				if (session && publisher) {
	// 					// newPublisher.once("accessAllowed", () => {
	// 					await session.unpublish(publisher);
	// 					await session.publish(newPublisher);
	// 					setCurrentVideoDevice(newVideoDevice[0]);
	// 					setMainStreamManager(newPublisher);
	// 					setPublisher(newPublisher);
	// 				}
	// 			}
	// 		}
	// 	} catch (e) {
	// 		console.error(e);
	// 	}
	// };

	// const handleMainVideoStream = (stream: StreamManager) => {
	// 	if (mainStreamManager !== stream) {
	// 		setMainStreamManager(stream);
	// 	}
	// };

	useEffect(() => {
		console.log('subscribers', subscribers);
		if (session === undefined) {
			joinSession();
		}
	});

	useEffect(() => {
		console.log('subscribers!!!!!!!!!!!!!!!!!!');
		console.log(subscribers);
	}, [subscribers]);

	useEffect(() => {
		console.log('publisher!!!!!!!!!!!');
		console.log(publisher);
	}, [publisher]);

	if (session === undefined) {
		return <div id="join">컨설턴트가 올 때까지 기다리셈 loading</div>;
	}

	return (
		<div id="session">
			<div id="session-header">
				<h1 id="session-title">클래스명</h1>
				{/* <input
					className="btn btn-large btn-danger"
					type="button"
					id="buttonLeaveSession"
					onClick={leaveSession}
					value="Leave session"
				/>
				<input
					className="btn btn-large btn-success"
					type="button"
					id="buttonSwitchCamera"
					onClick={switchCamera}
					value="Switch Camera"
				/> */}
			</div>

			{/* {mainStreamManager !== undefined && (
				<div id="main-video" className="col-md-6">
					<OpenViduVideo streamManager={mainStreamManager} />
				</div>
			)} */}
			<div id="video-container">
				{publisher !== undefined && (
					<div className="stream-container col-md-6 col-xs-6">
						<OpenViduVideo streamManager={publisher} />
						{/* <button type="button" onClick={() => handleMainVideoStream(publisher)}>
							유저비디오컴포넌트1
						</button> */}
					</div>
				)}
				{subscribers.map((sub) => {
					console.log('sub', sub);
					return (
						<div key={sub.id} className="stream-container">
							<h2>유저</h2>
							<OpenViduVideo streamManager={sub} />
							{/* <button type="button" onClick={() => handleMainVideoStream(sub)}>
								유저비디오컴포넌트2
							</button> */}
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default VideoPage;
