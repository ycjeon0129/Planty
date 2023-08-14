import React from 'react';
import PageTitleButton from 'components/atoms/common/PageTitleButton/PageTitleButton';
import JoinButton from 'components/atoms/consulting/JoinButton/JoinButton';
import TicketRemains from 'components/organisms/emergency/TicketRemains/TicketRemains';
import CheckEquip from 'components/organisms/emergency/CheckEquip/CheckEquip';
import EmergencyParticipatePageLayout from 'components/layout/Page/EmergencyParticipatePageLayout/EmergencyParticipatePageLayout/EmergencyParticipatePageLayout';
import { createConnectionApi, createSessionIdApi } from 'utils/api/emergency';
import { useParams } from 'react-router-dom';
import { ISessionInfo } from 'types/common/request';
import { useRecoilState } from 'recoil';
import requestState from 'recoil/consultingSession';
import useMovePage from 'hooks/useMovePage';

function EmergencyParticipatePage() {
	const { movePage } = useMovePage();
	const [, setRequest] = useRecoilState(requestState);
	const { type } = useParams(); // 채팅 0, 화상 1

	// 세션 아이디로 openVidu 연결 토큰 생성
	const createConnection = async (sessionInfo: ISessionInfo) => {
		try {
			if (sessionInfo) {
				const response = await createConnectionApi(sessionInfo);
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
		let sessionInfo: ISessionInfo | null = null;
		try {
			if (type) {
				const response = await createSessionIdApi(+type);
				if (response.status === 200) {
					sessionInfo = response.data as ISessionInfo;
					createConnection(sessionInfo);
				}
			}
		} catch (error) {
			console.error(error);
		}
	};

	const participate = () => {
		createSessionId();
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
