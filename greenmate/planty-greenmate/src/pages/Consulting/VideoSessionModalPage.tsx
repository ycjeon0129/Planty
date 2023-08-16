/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { ReactComponent as CamOffIcon } from 'assets/icons/consultingMenu/VideoOff.svg';
import { ReactComponent as MicOffIcon } from 'assets/icons/consultingMenu/MicOff.svg';
import VideoPageLayout from 'components/layout/page/Consulting/VideoPageLayout/VideoPageLayout';
import Header from 'components/organisms/common/Header/Header';
import OpenViduVideo from 'components/organisms/consulting/OpenViduVideo/OpenViduVideo';
import VideoConsultingMenu from 'components/organisms/consulting/VideoConsultingMenu/VideoConsultingMenu';
import useMovePage from 'hooks/useMovePage';
import { OpenVidu, Publisher, Session, StreamEvent, Subscriber } from 'openvidu-browser';
import { useRecoilState } from 'recoil';
import { consultingSessionState } from 'recoil/store';
import { toast } from 'react-hot-toast';
import CustomAlert from 'components/organisms/common/CustomAlert/CustomAlert';
import { Modal } from '@mui/material';
import Button from 'components/atoms/common/Button/Button';
import { findEmbeddedInfoByCidApi } from 'utils/api/consulting';
import { IEmbeddedInfo } from 'types/subscribe';
import PlantChart from 'components/organisms/consulting/PlantChart/PlantChart';
import LoadingPage from './LoadingPage';

function VideoSessionPage({ open, handleClose }: { open: boolean; handleClose: () => void }) {
	// common
	const { movePage } = useMovePage();
	const [isLoading, setLoading] = useState<boolean>(true);
	// WebRTC
	const [consultingSession, setConsultingSession] = useRecoilState(consultingSessionState);
	const [session, setSession] = useState<Session | undefined>(undefined); // 가상 룸
	const [subscriber, setSubscriber] = useState<Subscriber | undefined>(undefined);
	const [publisher, setPublisher] = useState<Publisher | undefined>(undefined);
	const [webcamEnabled, setWebcamEnabled] = useState<boolean>(true);
	const [microphoneEnabled, setMicrophoneEnabled] = useState<boolean>(true);
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
		ses.off('streamCreated');
		ses.off('streamDestroyed');
		ses.off('signal:exit');
		ses.disconnect();
		setSession(undefined);
		const idx = consultingSession?.idx; // 결과페이지로 넘겨줄 idx (cid or eid)
		const webRTCType = consultingSession?.webRTCType; // 결과페이지로 넘겨줄 idx (cid or eid)
		setConsultingSession(null);
		toast.success('상대방이 컨설팅을 종료했습니다.');
		movePage('/consulting/complete', { idx, webRTCType });
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
				session.off('streamCreated');
				session.off('streamDestroyed');
				session.off('signal:exit');
				session.disconnect();
				setSession(undefined);
				const idx = consultingSession?.idx; // 결과페이지로 넘겨줄 idx (cid or eid)
				const webRTCType = consultingSession?.webRTCType; // 결과페이지로 넘겨줄 idx (cid or eid)
				setConsultingSession(null);
				toast.success('컨설팅을 종료합니다.');
				movePage('/consulting/complete', { idx, webRTCType });
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
		if (consultingSession) await newSession.connect(`${consultingSession.token}`);

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

	useEffect(() => {
		// 컨설팅 세션에 참여한 상태가 아니라면, joinSession
		if (consultingSession && !session) {
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
	}, [webcamEnabled, microphoneEnabled, session, consultingSession]);

	// ####################구독 컨설팅 이용 시, 차트 정보#############################
	/**
	 * sid를 이용해 해당 구독의 식물 차트 정보를 가져옴.
	 * @param reqSid 구독의 sid
	 */
	const fetchEmbeddedInfo = async (reqSid: number) => {
		try {
			const response = await findEmbeddedInfoByCidApi(reqSid);
			if (response.status === 200) {
				setEmbeddedInfo(response.data);
			}
		} catch (error) {
			console.error(error);
		}
	};
	// sid 가 존재할 때에만 embedded정보를 fetch 해온다.
	useEffect(() => {
		if (consultingSession?.webRTCType === 0) fetchEmbeddedInfo(consultingSession?.idx);
	}, [consultingSession]);

	// #################### Render View #############################
	if (consultingSession) {
		return (
			<Modal open={open} onClose={handleClose}>
				<div>
					{!consultingSession || isLoading || !publisher || !subscriber ? (
						<LoadingPage />
					) : (
						<VideoPageLayout>
							{/* header */}
							<>
								<Header />
								<Button text="컨설팅 화면 최소화" isActive handleClick={handleClose} />
							</>
							{/* user-video */}
							{subscriber && <OpenViduVideo streamManager={subscriber} />}
							{/* greenmate-video */}
							<>
								{publisher && webcamEnabled ? <OpenViduVideo streamManager={publisher} /> : <CamOffIcon />}
								{!microphoneEnabled && <MicOffIcon />}
							</>
							{/* video-menu */}
							<VideoConsultingMenu
								toggleWebcam={toggleWebcam}
								toggleMicrophone={toggleMicrophone}
								toggleChartDisplay={toggleChartDisplay}
								exitConsulting={exitConsulting}
							/>
							{chartDisplayOn && (
								<div className="chart-display-wrap">
									<h3>온습도 정보</h3>
									<PlantChart embeddedInfo={embeddedInfo} />
								</div>
							)}
						</VideoPageLayout>
					)}
				</div>
			</Modal>
		);
	}
	return <div />;
}

export default VideoSessionPage;
