import React, { ReactNode } from 'react';
import './VideoConsultingPageLayout.scss';

function VideoConsultingPageLayout({ children }: { children: ReactNode[] }) {
	return <div>{children[0]}</div>;
}

export default VideoConsultingPageLayout;
