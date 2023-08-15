import PageTitleButton from 'components/atoms/common/PageTitleButton/PageTitleButton';
import SubConsultingHistoryPageLayout from 'components/layout/Page/SubConsultingHistoryPageLayout/SubConsultingHistoryPageLayout';
import BadgeDescription from 'components/organisms/common/BadgeDescription/BadgeDescription';
import MypageConsultingDetailList from 'components/organisms/mypage/MypageConsultingDetailList/MypageConsultingDetailList';
import { SUB_CONSULTING_HISTORY_STATUS_DESC_LIST } from 'constants/common/StatusDescList';
import useAllSubConsulting from 'hooks/api/useAllSubConsulting';
import React from 'react';
// import { findAllConsultingApi } from 'utils/api/consulting';

function SubConsultingHistoryPage() {
	const ConsultingData = useAllSubConsulting();
	const stateKeyList = ['join', 'notJoin', 'cancelConsult'];
	return (
		<SubConsultingHistoryPageLayout>
			<PageTitleButton type="back" text="구독 컨설팅 이용내역" />
			<BadgeDescription
				title="진행 내역"
				descriptionList={SUB_CONSULTING_HISTORY_STATUS_DESC_LIST}
				stateKeyList={stateKeyList}
			/>
			<MypageConsultingDetailList list={ConsultingData} />
		</SubConsultingHistoryPageLayout>
	);
}

export default SubConsultingHistoryPage;
