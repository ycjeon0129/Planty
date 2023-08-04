import React from 'react';
import PageTitleButton from 'components/atoms/common/PageTitleButton/PageTitleButton';
import ConsultingHistoryPageLayout from 'components/layout/Page/ConsultingHistoryPageLayout/ConsultingHistoryPageLayout';
import { CONSULTING_HISTORY_STATUS_DESC_LIST } from 'constants/common/StatusDescList';
import SubscribeStateBadge from 'components/atoms/subscribe/SubscribeStateBadge/SubscribeStateBadge';
import { CONSULTING_HISTORY_LIST } from 'dummy';
import BadgeDescription from '../../../components/organisms/common/BadgeDescription/BadgeDescription';
import ConsultingDetailList from '../../../components/organisms/mypage/ConsultingDetailList/ConsultingDetailList';

function ConsultingHistoryPage() {
	const badgeList = [<SubscribeStateBadge stateKey="join" />, <SubscribeStateBadge stateKey="notJoin" />];

	return (
		<ConsultingHistoryPageLayout>
			{/* 페이지 헤더 */}
			<PageTitleButton type="back" text="컨설팅 내역" />

			{/* 구독 상품명 */}
			<h2>방울방울 방울 토마토 클래스</h2>

			{/* 진행 내역 뱃지 설명 */}
			<BadgeDescription title="진행 내역" descriptionList={CONSULTING_HISTORY_STATUS_DESC_LIST} badgeList={badgeList} />

			{/* 컨설팅 내역 */}
			<ConsultingDetailList list={CONSULTING_HISTORY_LIST} />
		</ConsultingHistoryPageLayout>
	);
}

export default ConsultingHistoryPage;
