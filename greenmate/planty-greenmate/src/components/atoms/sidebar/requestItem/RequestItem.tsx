import React from 'react';
import './RequestItem.scss';
import x from 'assets/icons/Close.svg';
import { IConsultingSession, IRequest } from 'types/consulting';
import useMovePage from 'hooks/useMovePage';
import { getConsultingTokenApi, getEmergencyTokenApi } from 'utils/api/openVidu';
import { useRecoilState } from 'recoil';
import { consultingSessionState } from 'recoil/store';

/**
 * 사용자가 요청보낸 것(*수락버튼 + x버튼 눌렀을 떄 로직 미완*)
 * @param param0 Type : 채팅 or 화상, greenmate: 그린메이트 닉네임, service: 응급실, 정기 컨설팅
 * @returns
 */
function RequestItem({ request }: { request: IRequest }) {
	const [, setConsultingSession] = useRecoilState(consultingSessionState);
	const { movePage } = useMovePage();

	const getToken = async () => {
		try {
			let response;

			if (request.webRTCType === 0) {
				response = await getConsultingTokenApi(request.idx);
			} else if (request.webRTCType === 1) {
				response = await getEmergencyTokenApi(request.idx);
			}

			if (response?.status === 200) {
				const session: IConsultingSession = {
					idx: request.idx,
					token: response.data.token,
					username: request.username,
					webRTCType: request.webRTCType,
				};
				console.log(session);
				// console.log(movePage);
				setConsultingSession(session);
				movePage(`/consulting/video`, null);
			}
		} catch (error) {
			console.error(error);
		}
	};

	const handleClick = () => {
		getToken();
	};

	return (
		<div className="request-outer-box">
			<div className="request-left-box">
				<div className="bold-text">{request.webRTCType ? '화상' : '구독'}</div>
				<div>
					<div>{request.username}님</div>
					<div>{request.webRTCType ? '응급실 컨설팅' : '구독 컨설팅'} 요청</div>
				</div>
			</div>
			<div>
				<div className="request-right-box">
					<div className="right-end">
						<img src={x} alt="" />
					</div>
					<button className="green-text" type="button" onClick={handleClick}>
						요청 수락
					</button>
				</div>
			</div>
		</div>
	);
}

export default RequestItem;
