import OpenViduVideo from 'components/atoms/consulting/OpenViduVideo/OpenViduVideo';
import VideoConsultingPageLayout from 'components/layout/Page/VideoConsultingPageLayout/VideoConsultingPageLayout';
import VideoConsultingMenu from 'components/organisms/common/ChatButtonList/VideoConsultingMenu';
import React from 'react';

function VideoConsultingPage() {
	return (
		<VideoConsultingPageLayout>
			<OpenViduVideo streamManager={null} />
			<OpenViduVideo streamManager={null} />
			<VideoConsultingMenu />
		</VideoConsultingPageLayout>
	);
}

export default VideoConsultingPage;
