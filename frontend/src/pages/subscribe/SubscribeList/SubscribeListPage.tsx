import React from 'react';
import SubscribeListPageLayout from 'components/layout/subscirbe/SubscribeListPageLayout/SubscribeListPageLayout';
import SubscribeList from 'components/organisms/subscribe/SubscribeList/SubscribeList';
import SubscribeStateBadge from 'components/atoms/subscribe/SubscribeStateBadge/SubscribeStateBadge';
import PageTitleButton from '../../../components/atoms/common/PageTitleButton/PageTitleButton';

function SubscribeListPage() {
	return (
		<SubscribeListPageLayout>
			{/* 페이지 헤더 */}
			<PageTitleButton type="back" text="구독 목록" />

			{/* 컨설팅 상태 뱃지 설명 */}
			<h3>컨설팅 상태</h3>
			<ul>
				<li>※ 예약 취소는 예약 대기 1시간 이전까지 가능합니다.</li>
				<li>※ 컨설팅 시작하기는 예약 시간 10분 전 활성화 됩니다.</li>
				<li>※ 컨설팅 예약 후, 미참여 시에도 컨설팅 횟수가 차감됩니다.</li>
			</ul>
			<ul>
				<li>
					<SubscribeStateBadge stateKey="wait" />
				</li>
				<li>
					<SubscribeStateBadge stateKey="done" />
				</li>
				<li>
					<SubscribeStateBadge stateKey="end" />
				</li>
			</ul>

			{/* 구독 목록 */}
			<SubscribeList />
		</SubscribeListPageLayout>
	);
}

export default SubscribeListPage;
