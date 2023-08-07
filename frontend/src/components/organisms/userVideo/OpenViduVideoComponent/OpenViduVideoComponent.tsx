/* eslint-disable jsx-a11y/media-has-caption */
import React, { useRef, useEffect } from 'react';
import { StreamManager } from 'openvidu-browser';
import './OpenViduVideoComponent.scss';

function OpenViduVideoComponent({ streamManager, type }: { streamManager: StreamManager; type: string }) {
	const videoRef = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		if (streamManager && videoRef.current) {
			streamManager.addVideoElement(videoRef.current);
		}
	}, [streamManager]);

	if (type === 'GM') {
		return <video autoPlay ref={videoRef} className="video-GM" />;
	}

	return <video autoPlay ref={videoRef} className="video-user" />;
}

export default OpenViduVideoComponent;
