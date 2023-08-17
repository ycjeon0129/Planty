/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import OpenViduVideo from 'components/atoms/consulting/OpenViduVideo/OpenViduVideo';
import VideoConsultingPageLayout from 'components/layout/Page/VideoConsultingPageLayout/VideoConsultingPageLayout';
import VideoConsultingMenu from 'components/organisms/consulting/VideoConsultingMenu/VideoConsultingMenu';
import { OpenVidu, Publisher, Session, StreamEvent, Subscriber } from 'openvidu-browser';
import ConsultingLoadingPageLayout from 'components/layout/Page/ConsultingLoadingPageLayout/ConsultingLoadingPageLayout';
import { ReactComponent as CamOffIcon } from 'assets/icons/consultingMenu/VideoOff.svg';
import { ReactComponent as MicOffIcon } from 'assets/icons/consultingMenu/MicOff.svg';
import { ReactComponent as SwitchCamera } from 'assets/icons/SwitchCamera.svg';
import useMovePage from 'hooks/common/useMovePage';
import { useRecoilState } from 'recoil';
import consultingSessionState from 'recoil/consultingSession';
import { IConsultingSession } from 'types/common/request';
import useUser from 'hooks/common/useUser';
import { toast } from 'react-hot-toast';
import CustomAlert from 'components/organisms/common/CustomAlert/CustomAlert';
import { findEmbeddedInfoByCidApi } from 'utils/api/consulting';
import { IEmbeddedInfo } from 'types/domain/subscribe';
import PlantChart from 'components/organisms/subscribe/PlantChart/PlantChart';
import LocalStorage from 'constants/storage/LocalStorage';
import useToggle from 'hooks/common/useToggle';

function VideoConsultingPage() {
	// common
	const [user] = useUser();
	const { movePage } = useMovePage();
	const [isLoading, setLoading] = useState<boolean>(true);
	// WebRTC
	const [consultingSession, setConsultingSession] = useRecoilState(consultingSessionState); // 현재 진행중인 컨설팅 정보 (webRTCType, token)
	const [session, setSession] = useState<Session | undefined>(undefined); // 가상 룸
	const [subscriber, setSubscriber] = useState<Subscriber | undefined>(undefined);
	const [publisher, setPublisher] = useState<Publisher | undefined>(undefined);
	const [webcamEnabled, setWebcamEnabled] = useState<boolean>(true);
	const [microphoneEnabled, setMicrophoneEnabled] = useState<boolean>(true);
	const [camToggle, setCamToggle] = useToggle(false);

	// 구독 컨설팅 (임베디드)
	const [chartDisplayOn, setChartDisplayOn] = useState<boolean>(false);
	const [embeddedInfo, setEmbeddedInfo] = useState<IEmbeddedInfo[]>([]);

	// ########컨설팅 메뉴 토글 onClick 함수 선언########
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

	// ########스트림 이벤트 핸들러 선언########
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

	/**
	 * 상대방으로부터 exit signal을 받았을 때의 로직. (컨설팅 종료)
	 */
	const handleExitSignal = (ses: Session) => {
		toast.success('상대방이 컨설팅을 종료했습니다.');
		ses.off('streamCreated');
		ses.off('streamDestroyed');
		ses.off('signal:exit');
		ses.disconnect();
		LocalStorage.removeItem('sessionId');
		setSession(undefined);
		setConsultingSession(null);
		movePage('/consulting/complete', null);
	};

	// ####################컨설팅 세션 종료#############################
	/**
	 * 컨설팅 메뉴에서, 종료 버튼 클릭 시 처리 로직.
	 */
	const exitConsulting = () => {
		// 2. 확인(confirm) 시, 상대방에게 exit 신호를 보냄 & 모든 스트림 이벤트 리스너를 해지 & recoil 전역의 세션정보를 초기화
		const onConfirm = () => {
			if (session) {
				session.signal({ type: 'exit' });
				toast.success('컨설팅을 종료합니다.');
				session.off('streamCreated');
				session.off('streamDestroyed');
				session.off('signal:exit');
				session.disconnect();
				LocalStorage.removeItem('sessionId');
				setSession(undefined);
				setConsultingSession(null);
				movePage('/consulting/complete', null);
			}
		};

		// 1. 컨설팅 종료 확인 form 열기.
		CustomAlert({
			title: '화상 컨설팅 종료',
			btnTitle: '종료하기',
			desc: '화상 컨설팅을 종료하시겠습니까?',
			onAction: onConfirm,
			params: {},
		});
	};

	// ####################컨설팅 세션 참여#############################
	/**
	 * 새로운 컨설팅 세션을 만들고, recoil 전역에 있는 token으로 해당 세션에 접속.
	 */
	const joinSession = async () => {
		setLoading(true);
		const OV = new OpenVidu();
		const newSession = OV.initSession();
		setSession(newSession);

		const { token } = consultingSession as IConsultingSession;
		await newSession.connect(token, { clientData: user?.userName });
		let videoSource;

		// 카메라
		await OV.getDevices().then((devices) => {
			const videoDevices = devices.filter((device) => device.kind === 'videoinput');
			console.log('비디오 장치 목록', videoDevices);
			if (videoDevices && videoDevices.length > 1) {
				videoSource = camToggle ? videoDevices[1].deviceId : videoDevices[0].deviceId;
			}
		});

		console.log('비디오소스', videoSource);
		const initPublisher = await OV.initPublisherAsync(undefined, {
			audioSource: undefined, // The source of audio. If undefined default microphone
			videoSource, // The source of video. If undefined default webcam
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

	useEffect(() => {
		// 컨설팅 세션에 참여한 상태가 아니라면, joinSession
		if (!session) {
			joinSession();
		}

		// 컨설팅 세션에 참여한 상태라면, 스트림 이벤트 리스너를 달아줌.
		else if (session) {
			session.on('streamCreated', handleStreamCreated);
			session.on('streamDestroyed', handleStreamDestroyed);
			session.on('signal:exit', () => handleExitSignal(session));
		}

		// 언마운트 시, 스트림 이벤트 리스너를 떼어줌.
		return () => {
			if (session) {
				session.off('streamCreated');
				session.off('streamDestroyed');
				session.off('signal:exit');
			}
		};
	}, [webcamEnabled, microphoneEnabled, session, consultingSession, user]);

	// ####################구독 컨설팅 이용 시, 차트 정보#############################
	/**
	 * sid를 이용해 해당 구독의 식물 차트 정보를 가져옴.
	 * @param reqSid 구독의 sid
	 */
	const fetchEmbeddedInfo = async (reqSid: number) => {
		try {
			const response = await findEmbeddedInfoByCidApi(reqSid);
			if (response.status === 200) {
				console.log(response);
				setEmbeddedInfo(response.data);
			}
		} catch (error) {
			console.error(error);
		}
	};

	// sid 가 존재할 때에만 embedded정보를 fetch 해온다.
	useEffect(() => {
		if (consultingSession?.webRTCType === 0) fetchEmbeddedInfo(consultingSession.idx);
	}, []);

	useEffect(() => {
		console.log(camToggle);
	}, [camToggle]);

	// #################### Render View #############################
	if (isLoading || !publisher || !subscriber) {
		return <ConsultingLoadingPageLayout />;
	}

	return (
		<VideoConsultingPageLayout>
			{subscriber && <OpenViduVideo streamManager={subscriber} />}
			<>
				{publisher && webcamEnabled ? <OpenViduVideo streamManager={publisher} /> : <CamOffIcon />}
				<div id="device-menu">
					<div id="mic">{!microphoneEnabled && <MicOffIcon />}</div>
					<button id="cam" type="button" onClick={setCamToggle}>
						{webcamEnabled && <SwitchCamera />}
					</button>
				</div>
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
					<PlantChart embeddedInfo={embeddedInfo} />
				</div>
			)}
		</VideoConsultingPageLayout>
	);
}

export default VideoConsultingPage;
