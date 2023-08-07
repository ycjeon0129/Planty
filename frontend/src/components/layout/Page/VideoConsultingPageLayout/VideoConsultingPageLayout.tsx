import React, { ReactNode } from 'react';
import './VideoConsultingPageLayout.scss';

function VideoConsultingPageLayout({ children }: { children: ReactNode[] }) {
	return (
		<div className="video-consulting-page-layout-container">
			<div id="greenmate-video">{children[0]}</div>
			<div id="user-video">{children[1]}</div>
			<div id="video-consulting-menu">{children[2]}</div>
		</div>
	);
}

export default VideoConsultingPageLayout;
