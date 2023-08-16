import PageTitleButton from 'components/atoms/common/PageTitleButton/PageTitleButton';
import EmergencyHistoryPageLayout from 'components/layout/Page/EmergencyHistoryPageLayout/EmergencyHistoryPageLayout';
import BadgeDescription from 'components/organisms/common/BadgeDescription/BadgeDescription';
import EmergencyDetailList from 'components/organisms/mypage/EmergencyDetailList/EmergencyDetailList';
import { EMERGENCY_HISTORY_STATUS_DESC_LIST } from 'constants/common/StatusDescList';
import useEmergency from 'hooks/api/useEmergency';
import React from 'react';

function EmergencyHistoryPage() {
	const emergencyList = useEmergency();
	console.log(emergencyList);

	const stateKeyList = ['chat', 'video'];

	return (
		<EmergencyHistoryPageLayout>
			<PageTitleButton type="back" text="응급실 이용내역" />
			<BadgeDescription
				title="진행 내역"
				descriptionList={EMERGENCY_HISTORY_STATUS_DESC_LIST}
				stateKeyList={stateKeyList}
			/>
			<EmergencyDetailList list={emergencyList} />
		</EmergencyHistoryPageLayout>
	);
}

export default EmergencyHistoryPage;
