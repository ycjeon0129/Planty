/* eslint-disable jsx-a11y/media-has-caption */
import React, { useRef, useEffect } from 'react';
import { Publisher, StreamManager } from 'openvidu-browser';
import './OpenViduVideo.scss';

function OpenViduVideo({ streamManager }: { streamManager: StreamManager | Publisher | null }) {
	const videoRef = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		if (streamManager && videoRef.current) {
			streamManager.addVideoElement(videoRef.current);
		}
	}, [streamManager]);

	return (
		<div className="openvidu-video-container">
			<video autoPlay ref={videoRef} />
		</div>
	);
}

export default OpenViduVideo;
