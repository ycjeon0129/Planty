import PageHeader from 'components/atoms/common/PageHeader/PageHeader';
import ChattingPageLayout from 'components/layout/page/Consulting/ChattingPageLayout/ChattingPageLayout';
import React from 'react';

function ChattingPage() {
	return (
		<ChattingPageLayout>
			<PageHeader text="현재 진행중인 컨설팅" />
			<div>상단바</div>
			<div>채팅 메시지 목록</div>
			<div>채팅 입력창</div>
		</ChattingPageLayout>
	);
}

export default ChattingPage;
