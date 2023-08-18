import React, { ReactNode } from 'react';
import './ChattingPageLayout.scss';
import PageLayout from 'components/layout/common/PageLayout/PageLayout';
import ContentsLayout from 'components/layout/common/ContentsLayout/ContentsLayout';

/**
 * 현재 진행중인 컨설팅 - 채팅상담 진행 페이지
 * @param children [페이지헤더, 상단바, 메시지목록, 입력창]
 */
function ChattingPageLayout({ children }: { children: ReactNode[] }) {
	return (
		<PageLayout>
			{children[0]}
			<div className="chatting-page-layout-container">
				<ContentsLayout id="chatting-area">
					{/* 채팅 상단바 영역 */}
					<div id="chat-info">{children[1]}</div>
					{/* 채팅 메시지 영역 */}
					<div id="chat-messages">{children[2]}</div>
					{/* 채팅 입력창 영역 */}
					<div id="chat-input">{children[3]}</div>
				</ContentsLayout>
			</div>
		</PageLayout>
	);
}

export default ChattingPageLayout;
