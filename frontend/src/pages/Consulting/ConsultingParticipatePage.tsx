import React from 'react';
import PageTitleButton from 'components/atoms/common/PageTitleButton/PageTitleButton';
import JoinButton from 'components/atoms/consulting/JoinButton/JoinButton';
import CheckEquip from 'components/organisms/emergency/CheckEquip/CheckEquip';
import ConsultingParticipatePageLayout from 'components/layout/Page/ConsultingParticipatePageLayout/ConsultingParticipatePageLayout';
import ParticipateBox from 'components/organisms/consulting/ParticipateBox/ParticipateBox';
import { useLocation } from 'react-router-dom';
import consultingSessionState from 'recoil/consultingSession';
import { useRecoilState } from 'recoil';
import useMovePage from 'hooks/common/useMovePage';
import { createSubscribeConnectionApi, createSubscribeSessionIdApi } from 'utils/api/openVidu';
import { ISubscribeSessionInfo } from 'types/common/request';
import AreaTitle from 'components/atoms/common/AreaTitle/AreaTitle';
import ConsultingLottie from 'components/atoms/consulting/ConsultingLottie/ConsultingLottie';
import { AxiosError } from 'axios';
import LocalStorage from 'constants/storage/LocalStorage';
import { toast } from 'react-hot-toast';

function ConsultingParticipatePage() {
	const { consultingParticipateInfo } = useLocation().state;
	const { goBack, movePage } = useMovePage();
	const [, setConsultingSession] = useRecoilState(consultingSessionState);

	// 세션 아이디로 openVidu 연결 토큰 생성
	const createConnection = async (sessionInfo: ISubscribeSessionInfo) => {
		try {
			if (sessionInfo) {
				const response = await createSubscribeConnectionApi(sessionInfo);
				if (response.status === 200) {
					const { token } = response.data;
					setConsultingSession({ webRTCType: 0, token, idx: sessionInfo.cid }); // 구독에 대한 컨설팅이므로 0
					movePage('/consulting/video', { sid: consultingParticipateInfo.sid });
				}
			}
		} catch (error) {
			console.error(error);
		}
	};

	// 세션 아이디 생성
	const createSessionId = async () => {
		let sessionInfo: ISubscribeSessionInfo | null = null;
		try {
			const response = await createSubscribeSessionIdApi(consultingParticipateInfo.cid);

			if (response.status === 200) {
				LocalStorage.setItem('sessionId', response.data.sessionId);
				sessionInfo = {
					cid: consultingParticipateInfo.cid,
					sessionId: response.data.sessionId,
				};
				createConnection(sessionInfo);
			}
		} catch (error: unknown) {
			if (error instanceof AxiosError) {
				if (error.response?.status === 409) {
					const sessionId = LocalStorage.getItem('sessionId');
					if (sessionId) {
						sessionInfo = {
							cid: consultingParticipateInfo.cid,
							sessionId,
						};
						createConnection(sessionInfo);
					} else {
						// TODO : 에러 잡아야 함. (cid로 SessionId 불러오는 로직이 필요)
						toast.error(`${error.response.data.message}\n잠시 후 다시 시도하세요.`);
						goBack();
					}
				}
			}
		}
	};

	const participate = () => {
		createSessionId();
	};

	return (
		<ConsultingParticipatePageLayout>
			{/* 이전으로 */}
			<PageTitleButton type="back" text="이전으로" />
			{/* area */}
			<AreaTitle title="1:1 화상 컨설팅 참여하기" url="#" />
			{/* lottie */}
			<ConsultingLottie />
			{/* 상품Detail box */}
			<ParticipateBox consultingParticipateInfo={consultingParticipateInfo} />
			{/* 장비확인 text */}
			<CheckEquip />
			{/* 참여하기 버튼 */}
			<JoinButton isActive handleClick={participate} />
		</ConsultingParticipatePageLayout>
	);
}

export default ConsultingParticipatePage;
