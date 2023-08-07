import React from 'react';
import PageTitleButton from 'components/atoms/common/PageTitleButton/PageTitleButton';
import JoinButton from 'components/atoms/consulting/JoinButton/JoinButton';
import TicketRemains from 'components/organisms/emergency/TicketRemains/TicketRemains';
import CheckEquip from 'components/organisms/emergency/CheckEquip/CheckEquip';
import EmergencyParticipatePageLayout from 'components/layout/Page/EmergencyParticipatePageLayout/EmergencyParticipatePageLayout/EmergencyParticipatePageLayout';

function EmergencyParticipatePage() {
	const test = () => {
		alert('클릭');
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
			<JoinButton isActive handleClick={test} />
		</EmergencyParticipatePageLayout>
	);
}

export default EmergencyParticipatePage;
