import React, { useEffect } from 'react';
import { StreamManager } from 'openvidu-browser';
import './UserVideoComponent.scss';
// import OpenViduVideo from '../../../atoms/consulting/OpenViduVideo/OpenViduVideo';

function UserVideoComponent({ streamManager }: { streamManager: StreamManager }) {
	const getNicknameTag = () => {
		// Gets the nickName of the user
		return JSON.parse(streamManager.stream.connection.data).clientData;
	};

	useEffect(() => {
		console.log('sM', streamManager);
	});
	return (
		<div>
			{streamManager !== undefined ? (
				<div className="streamcomponent">
					{/* <OpenViduVideo streamManager={streamManager} /> */}
					<div>
						<p>{getNicknameTag()}</p>
					</div>
				</div>
			) : null}
		</div>
	);
}

export default UserVideoComponent;
