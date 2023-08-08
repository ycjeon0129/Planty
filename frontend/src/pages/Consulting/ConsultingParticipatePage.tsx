import React from 'react';
import PageTitleButton from 'components/atoms/common/PageTitleButton/PageTitleButton';
import JoinButton from 'components/atoms/consulting/JoinButton/JoinButton';
import CheckEquip from 'components/organisms/emergency/CheckEquip/CheckEquip';
import ConsultingParticipatePageLayout from 'components/layout/Page/ConsultingParticipatePageLayout/ConsultingParticipatePageLayout';
import ParticipateBox from 'components/organisms/consulting/ParticipateBox/ParticipateBox';

function ConsultingParticipatePage() {
	const test = () => {
		alert('클릭');
	};
	return (
		<ConsultingParticipatePageLayout>
			{/* 이전으로 */}
			<PageTitleButton type="back" text="이전으로" />
			{/* 상품Detail box */}
			<ParticipateBox />
			{/* 장비확인 text */}
			<CheckEquip />
			{/* 참여하기 버튼 */}
			<JoinButton isActive handleClick={test} />
		</ConsultingParticipatePageLayout>
	);
}

export default ConsultingParticipatePage;
