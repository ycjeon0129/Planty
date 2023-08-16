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
import LoadingPage from './LoadingPage';

function VideoSessionPage({ open, handleClose }: { open: boolean; handleClose: () => void }) {
	const [consultingSession, setConsultingSession] = useRecoilState(consultingSessionState);
	const { movePage } = useMovePage();
	const [session, setSession] = useState<Session | undefined>(undefined); // 가상 룸
	const [subscriber, setSubscriber] = useState<Subscriber | undefined>(undefined);
	const [publisher, setPublisher] = useState<Publisher | undefined>(undefined);
	const [webcamEnabled, setWebcamEnabled] = useState<boolean>(true);
	const [microphoneEnabled, setMicrophoneEnabled] = useState<boolean>(true);
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

	const handleExitSignal = (ses: Session) => {
		toast.success('상대방이 컨설팅을 종료했습니다.');
		ses.off('streamCreated');
		ses.off('streamDestroyed');
		ses.off('signal:exit');
		ses.disconnect();
		setSession(undefined);
		setConsultingSession(null);
		movePage('/consulting/complete', null);
	};

	/**
	 * 컨설팅 메뉴 - 종료 버튼 클릭시
	 */
	const exitConsulting = () => {
		const onConfirm = () => {
			if (session) {
				toast.success('컨설팅을 종료합니다.');
				session.signal({ type: 'exit' });
				session.off('streamCreated');
				session.off('streamDestroyed');
				session.off('signal:exit');
				session.disconnect();
			} else {
				toast.success('종료된 세션입니다.');
			}
			setConsultingSession(null);
			setSession(undefined);
			movePage('/consulting/complete', null);
		};

		CustomAlert({
			title: '화상 컨설팅 종료',
			btnTitle: '종료하기',
			desc: '화상 컨설팅을 종료하시겠습니까?',
			onAction: onConfirm,
			params: {},
		});
	};

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
		if (consultingSession && !session) {
			joinSession();
		}
	}, [webcamEnabled, microphoneEnabled, session, consultingSession]);

	useEffect(() => {
		if (consultingSession && session) {
			session.on('streamCreated', handleStreamCreated);
			session.on('streamDestroyed', handleStreamDestroyed);
			session.on('signal:exit', () => handleExitSignal(session));
		}

		return () => {
			if (session) {
				session.off('streamCreated');
				session.off('streamDestroyed');
				session.off('signal:exit');
			}
		};
	});

	// 컨설팅 세션이 있을때만 렌더링
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
								exitConsulting={exitConsulting}
							/>
						</VideoPageLayout>
					)}
				</div>
			</Modal>
		);
	}
	return <div />;
}

export default VideoSessionPage;
