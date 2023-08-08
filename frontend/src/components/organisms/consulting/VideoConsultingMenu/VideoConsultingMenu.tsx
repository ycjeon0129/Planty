import React from 'react';
import './VideoConsultingMenu.scss';
import VideoConsultingMenuItem from 'components/atoms/consulting/VideoConsultingMenuItem/VideoConsultingMenuItem';
import useToggle from 'hooks/useToggle';
import uuid from 'react-uuid';
import MENU from 'constants/menu/VideoConsultingMenu';

/**
 * 비디오 컨설팅 메뉴바
 */
function VideoConsultingMenu({
	toggleWebcam,
	toggleMicrophone,
	exitConsulting,
}: {
	toggleWebcam: () => void;
	toggleMicrophone: () => void;
	exitConsulting: () => void;
}) {
	const [camState, toggleCamera] = useToggle(false);
	const [micState, toggleMic] = useToggle(false);
	const [chatState, toggleChat] = useToggle(false);
	const [chartState, toggleChart] = useToggle(false);
	const [exitState] = useToggle(false);

	/**
	 * [상태 값과 상태 처리 함수] 배열을 반환하는 함수
	 * @param key 상태를 얻고자 하는 메뉴 key
	 * @returns [state, handleState]
	 */
	const getStates = (key: string) => {
		const handleCam = () => {
			// 캠 on/off 로직 추가
			toggleCamera();
			toggleWebcam();
		};
		const handleMic = () => {
			// 마이크 on/off 로직 추가
			toggleMic();
			toggleMicrophone();
		};
		const handleChat = () => {
			// 캠 on/off 로직 추가
			toggleChat();
		};
		const handleChart = () => {
			// 캠 on/off 로직 추가
			toggleChart();
		};
		const handleExit = () => {
			// 컨설팅 종료 로직 추가
			exitConsulting();
		};

		switch (key) {
			case 'cam':
				return [camState, handleCam];
			case 'mic':
				return [micState, handleMic];
			case 'chat':
				return [chatState, handleChat];
			case 'chart':
				return [chartState, handleChart];
			default:
				return [exitState, handleExit];
		}
	};

	return (
		<div className="btn-box">
			{MENU.map((menu) => (
				<VideoConsultingMenuItem
					key={uuid()}
					isActive={getStates(menu.key)[0] as boolean}
					icon={getStates(menu.key)[0] ? menu.onIcon : menu.offIcon}
					isDanger={menu.isDanger}
					handleClick={getStates(menu.key)[1] as () => void}
				/>
			))}
		</div>
	);
}

export default VideoConsultingMenu;
