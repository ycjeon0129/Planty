import React, { useRef, useEffect } from 'react';
import { StreamManager } from 'openvidu-browser';
import './OpenViduVideoComponent.scss';

function OpenViduVideoComponent({ streamManager }: { streamManager: StreamManager }) {
	const videoRef = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		if (streamManager && videoRef.current) {
			streamManager.addVideoElement(videoRef.current);
		}
	}, [streamManager]);

	// eslint-disable-next-line jsx-a11y/media-has-caption
	return <video autoPlay ref={videoRef} />;
}

export default OpenViduVideoComponent;
