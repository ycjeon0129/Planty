import React, { useState } from 'react';
import CompleteLottie from 'components/atoms/consulting/CompleteLottie/CompleteLottie';
import Button from 'components/atoms/common/Button/Button';
import useMovePage from 'hooks/useMovePage';
import ConsultingCompletePageLayout from 'components/layout/page/Consulting/ConsultingCompletePageLayout/ConsultingCompletePageLayout';
import AreaTitle from 'components/atoms/common/AreaTitle/AreaTitle';
import { saveConsultingAdviceApi, saveEmergencyAdviceApi } from 'utils/api/consulting';
import { useLocation } from 'react-router-dom';
import CustomAlert from 'components/organisms/common/CustomAlert/CustomAlert';
import { toast } from 'react-hot-toast';
import moment from 'moment';

function ConsultingCompletePage() {
	const { movePage } = useMovePage();
	const { idx, webRTCType } = useLocation().state;
	const [name, setName] = useState('');
	const [content, setContent] = useState('');
	const [startDate, setStartDate] = useState('');
	const [endDate, setEndDate] = useState('');

	/**
	 * recoil 전역의 컨설팅 세션 정보를 삭제하고, 대시보드로 이동
	 */
	const returnDashboard = () => {
		toast.success('당신의 한마디가 가드너에게 전달되었습니다.\n대시보드로 이동합니다.');
		movePage('/', null);
	};

	/**
	 * 가드너에게 전달하기 버튼 클릭했을 때의 함수 (webRTCType에 따라 보낼 api를 결정.)
	 * 1. webRTCType가 0일 때 : 구독 컨설팅에 대한 일지 작성
	 * 2. webRTCType가 1일 때 : 응급실 컨설팅에 대한 일지 작성
	 */
	const saveAdvice = () => {
		const onConfirm = async () => {
			try {
				// 구독 컨설팅에 대한 일지 작성
				if (webRTCType === 0) {
					const response = await saveConsultingAdviceApi(
						idx,
						moment(startDate).format('YYYY-MM-DD'),
						moment(endDate).format('YYYY-MM-DD'),
						content,
					);
					if (response.status === 200) {
						returnDashboard();
					}
				}
				// 응급실 컨설팅에 대한 일지작성
				else if (webRTCType === 1) {
					const response = await saveEmergencyAdviceApi(idx, name, content);
					if (response.status === 200) {
						returnDashboard();
					}
				}
			} catch (error) {
				console.error(error);
			}
		};

		CustomAlert({
			title: '가드너에게 한마디 전달하기',
			btnTitle: '전달하기',
			desc: '입력하신 내용을 전달하시겠습니까?',
			onAction: onConfirm,
			params: {},
		});
	};

	// ####################View Render############################
	return (
		<ConsultingCompletePageLayout>
			<CompleteLottie />
			<h2>컨설팅 세션이 종료되었습니다.</h2>
			<h4>가드너에게 조언을 남겨주세요.</h4>
			<div>
				{webRTCType === 0 ? (
					<div className="advice-option">
						<AreaTitle title="다음 권장 상담일" url="#" />
						<input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
						부터 <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} /> 사이에 예약하세요!
					</div>
				) : (
					<div className="advice-option">
						<AreaTitle title="가드너의 식물명" url="#" />
						<input type="text" id="plant-name" value={name} onChange={(e) => setName(e.target.value)} />
					</div>
				)}
				<AreaTitle title="가드너에게 한마디" url="#" />
				<textarea value={content} onChange={(e) => setContent(e.target.value)} />
			</div>
			<Button text="가드너에게 전달하기" handleClick={saveAdvice} isActive />
		</ConsultingCompletePageLayout>
	);
}

export default ConsultingCompletePage;
