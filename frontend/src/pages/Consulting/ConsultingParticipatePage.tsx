import React from 'react';
import PageTitleButton from 'components/atoms/common/PageTitleButton/PageTitleButton';
import JoinButton from 'components/atoms/consulting/JoinButton/JoinButton';
import CheckEquip from 'components/organisms/emergency/CheckEquip/CheckEquip';
import ConsultingParticipatePageLayout from 'components/layout/Page/ConsultingParticipatePageLayout/ConsultingParticipatePageLayout';
import ParticipateBox from 'components/organisms/consulting/ParticipateBox/ParticipateBox';
import { useLocation } from 'react-router-dom';
import { ISessionInfo } from 'types/common/request';
import requestState from 'recoil/consultingSession';
import { useRecoilState } from 'recoil';
import useMovePage from 'hooks/useMovePage';
import { createSubscribeConnectionApi, createSubscribeSessionIdApi } from 'utils/api/openVidu';

function ConsultingParticipatePage() {
	const { subscribe } = useLocation().state;
	const { movePage } = useMovePage();
	const [, setRequest] = useRecoilState(requestState);

	// 세션 아이디로 openVidu 연결 토큰 생성
	const createConnection = async (sessionInfo: ISessionInfo) => {
		try {
			if (sessionInfo) {
				const response = await createSubscribeConnectionApi(sessionInfo);
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
			const response = await createSubscribeSessionIdApi();
			if (response.status === 200) {
				sessionInfo = response.data as ISessionInfo;
				createConnection(sessionInfo);
			}
		} catch (error) {
			console.error(error);
		}
	};

	const participate = () => {
		createSessionId();
	};

	console.log(subscribe);

	return (
		<ConsultingParticipatePageLayout>
			{/* 이전으로 */}
			<PageTitleButton type="back" text="이전으로" />
			{/* 상품Detail box */}
			<ParticipateBox />
			{/* 장비확인 text */}
			<CheckEquip />
			{/* 참여하기 버튼 */}
			<JoinButton isActive handleClick={participate} />
		</ConsultingParticipatePageLayout>
	);
}

export default ConsultingParticipatePage;
