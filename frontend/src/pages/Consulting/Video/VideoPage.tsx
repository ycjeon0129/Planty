import React, { useState } from 'react';
import { OpenVidu, Session, Publisher, Device, Subscriber, StreamManager } from 'openvidu-browser';
import UserVideoComponent from 'components/organisms/userVideo/UserVideoComponent/UserVideoComponent';
import axios from 'axios';

const APPLICATION_SERVER_URL = process.env.NODE_ENV === 'production' ? '' : 'https://demos.openvidu.io/';
console.log('APPLICATION_SERVER_URL', APPLICATION_SERVER_URL);

function VideoPage() {
	const [mySessionId, setMySessionId] = useState<string>('TTTTEST');
	const [myUserName, setMyUserName] = useState<string>('Test1');
	const [OV, setOV] = useState<OpenVidu | null>(null);
	const [session, setSession] = useState<Session | undefined>(undefined);
	const [mainStreamManager, setMainStreamManager] = useState<StreamManager | undefined>(undefined);
	const [publisher, setPublisher] = useState<Publisher | undefined>(undefined);
	const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
	const [currentVideoDevice, setCurrentVideoDevice] = useState<Device | undefined>();

	const deleteSubscriber = (e: StreamManager) => {
		console.log('deleteSubscriber', e);
	};

	const createToken = async (sessionId: string) => {
		const response = await axios.post(
			`${APPLICATION_SERVER_URL}api/sessions/${sessionId}/connections`,
			{},
			{
				headers: { 'Content-Type': 'application/json' },
			},
		);
		return response.data; // The token
	};

	const createSession = async (sessionId: string) => {
		const response = await axios.post(
			`${APPLICATION_SERVER_URL}api/sessions`,
			{ customSessionId: sessionId },
			{
				headers: { 'Content-Type': 'application/json' },
			},
		);
		return response.data; // The sessionId
	};

	const getToken = async () => {
		const sessionId = await createSession(mySessionId);
		return createToken(sessionId);
	};

	const joinSession = () => {
		const openvidu = new OpenVidu();
		setOV(openvidu);

		const newSession = openvidu.initSession();
		setSession(newSession);
		newSession.on('streamCreated', (event) => {
			const subscriber = newSession.subscribe(event.stream, undefined);
			setSubscribers((prevSubscribers) => [...prevSubscribers, subscriber]);
		});

		newSession.on('streamDestroyed', (event) => {
			deleteSubscriber(event.stream.streamManager);
		});

		getToken().then((token) => {
			newSession
				.connect(token, { clientData: myUserName })
				.then(async () => {
					const initPublisher = await openvidu.initPublisherAsync(undefined, {
						audioSource: undefined, // The source of audio. If undefined default microphone
						videoSource: undefined, // The source of video. If undefined default webcam
						publishAudio: true, // Whether you want to start publishing with your audio unmuted or not
						publishVideo: true, // Whether you want to start publishing with your video enabled or not
						resolution: '640x480', // The resolution of your video
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

	const handleChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.value === undefined || e.target.value.length === 0) {
			alert('값 입력');
			return;
		}
		setMyUserName(e.target.value);
	};

	const handleChangeSessionId = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.value === undefined || e.target.value.length === 0) {
			alert('값 입력');
			return;
		}
		setMySessionId(e.target.value);
	};

	const leaveSession = () => {
		const mySession = session;

		if (mySession) {
			mySession.disconnect();
		}
	};

	const switchCamera = async () => {
		try {
			if (OV === null) {
				console.log('OV is null');
				return;
			}
			const devices = await OV.getDevices();
			const videoDevices = devices.filter((device) => device.kind === 'videoinput');

			if (videoDevices && currentVideoDevice && videoDevices.length > 1) {
				const newVideoDevice = videoDevices.filter((device) => device.deviceId !== currentVideoDevice.deviceId);

				if (newVideoDevice.length > 0) {
					// Creating a new publisher with specific videoSource
					// In mobile devices the default and first camera is the front one
					const newPublisher = OV.initPublisher(undefined, {
						videoSource: newVideoDevice[0].deviceId,
						publishAudio: true,
						publishVideo: true,
						mirror: true,
					});

					if (session && publisher) {
						// newPublisher.once("accessAllowed", () => {
						await session.unpublish(publisher);
						await session.publish(newPublisher);
						setCurrentVideoDevice(newVideoDevice[0]);
						setMainStreamManager(newPublisher);
						setPublisher(newPublisher);
					}
				}
			}
		} catch (e) {
			console.error(e);
		}
	};

	const handleMainVideoStream = (stream: StreamManager) => {
		if (mainStreamManager !== stream) {
			setMainStreamManager(stream);
		}
	};

	return (
		<div className="container">
			{session === undefined ? (
				<div id="join">
					<div id="img-div">
						<img src="resources/images/openvidu_grey_bg_transp_cropped.png" alt="OpenVidu logo" />
					</div>
					<div id="join-dialog" className="jumbotron vertical-center">
						<h1> Join a video session </h1>
						<form className="form-group" onSubmit={joinSession}>
							<p>
								<label htmlFor="userName">
									Participant:
									<input
										className="form-control"
										type="text"
										id="userName"
										value={myUserName}
										onChange={handleChangeUserName}
										required
									/>
								</label>
							</p>
							<p>
								<label htmlFor="sessionId">
									Session:
									<input
										className="form-control"
										type="text"
										id="sessionId"
										value={mySessionId}
										onChange={handleChangeSessionId}
										required
									/>
								</label>
							</p>
							<p className="text-center">
								<input className="btn btn-lg btn-success" name="commit" type="submit" value="JOIN" />
							</p>
						</form>
					</div>
				</div>
			) : null}

			{session !== undefined ? (
				<div id="session">
					<div id="session-header">
						<h1 id="session-title">{mySessionId}</h1>
						<input
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
						/>
					</div>

					{mainStreamManager !== undefined ? (
						<div id="main-video" className="col-md-6">
							<UserVideoComponent streamManager={mainStreamManager} />
						</div>
					) : null}
					<div id="video-container" className="col-md-6">
						{publisher !== undefined ? (
							<div className="stream-container col-md-6 col-xs-6">
								<UserVideoComponent streamManager={publisher} />
								<button type="button" onClick={() => handleMainVideoStream(publisher)}>
									유저비디오컴포넌트1
								</button>
							</div>
						) : null}
						{subscribers.map((sub) => (
							<div key={sub.id} className="stream-container col-md-6 col-xs-6">
								<span>{sub.id}</span>
								<UserVideoComponent streamManager={sub} />
								<button type="button" onClick={() => handleMainVideoStream(sub)}>
									유저비디오컴포넌트2
								</button>
							</div>
						))}
					</div>
				</div>
			) : null}
		</div>
	);
}

export default VideoPage;
