import React from 'react';
import PageTitleButton from 'components/atoms/common/PageTitleButton/PageTitleButton';
import JoinButton from 'components/atoms/consulting/JoinButton/JoinButton';
import TicketRemains from 'components/organisms/emergency/TicketRemains/TicketRemains';
import CheckEquip from 'components/organisms/emergency/CheckEquip/CheckEquip';
import EmergencyParticipatePageLayout from 'components/layout/Page/EmergencyParticipatePageLayout/EmergencyParticipatePageLayout/EmergencyParticipatePageLayout';
import { useParams } from 'react-router-dom';
import { IEmergencySessionInfo } from 'types/common/request';
import { useRecoilState } from 'recoil';
import requestState from 'recoil/consultingSession';
import useMovePage from 'hooks/common/useMovePage';
import { createEmergencyConnectionApi, createEmergencySessionIdApi } from 'utils/api/openVidu';
import useUser from 'hooks/common/useUser';

function EmergencyParticipatePage() {
	const { movePage } = useMovePage();
	const [, setRequest] = useRecoilState(requestState);
	const { type } = useParams(); // 채팅 0, 화상 1
	const [user, setUser] = useUser();
	console.log(user);

	// 세션 아이디로 openVidu 연결 토큰 생성
	const createConnection = async (sessionInfo: IEmergencySessionInfo) => {
		try {
			if (sessionInfo) {
				const response = await createEmergencyConnectionApi(sessionInfo);
				if (response.status === 200) {
					const { token } = response.data;
					setRequest({ webRTCType: 1, token }); // 응급실에 대한 컨설팅이므로 1
					movePage('/consulting/video', null);
				}
			}
		} catch (error) {
			console.error(error);
		}
	};

	// 세션 아이디 생성
	const createSessionId = async () => {
		let sessionInfo: IEmergencySessionInfo | null = null;
		try {
			if (type) {
				const response = await createEmergencySessionIdApi(+type);
				if (response.status === 200) {
					sessionInfo = response.data as IEmergencySessionInfo;
					createConnection(sessionInfo);
				}
			}
		} catch (error) {
			console.error(error);
		}
	};

	// const participate = () => {
	// 	if (user) {
	// 		const updatedUser = { ...user, emergencyCount: user.emergencyCount - 1 };

	// 		createSessionId();

	// 		// updatedUser를 활용하여 필요한 작업 수행
	// 		console.log(updatedUser.emergencyCount); // 변경된 값을 사용
	// 		user.emergencyCount = updatedUser.emergencyCount;
	// 		// 원래 user 객체에 변경 사항을 적용하지 않음
	// 		// user = updatedUser; // 이런 식으로 할당하려면 user가 let 변수여야 함
	// 	}
	// };

	const participate = () => {
		if (user && user.emergencyCount > 0) {
			createSessionId();
			setUser((prevUser) => {
				if (prevUser) {
					return {
						...prevUser,
						emergencyCount: prevUser.emergencyCount - 1,
					};
				}
				return prevUser;
			});
		}
	};

	return (
		<EmergencyParticipatePageLayout>
			{/* 이전으로 */}
			<PageTitleButton type="back" text="이전으로" />
			{/* 응급실서비스 box */}
			<TicketRemains />
			{/* 장비확인 text */}
			<CheckEquip />
			{/* 참여하기 버튼 */}
			<JoinButton isActive handleClick={participate} />
		</EmergencyParticipatePageLayout>
	);
}

export default EmergencyParticipatePage;
