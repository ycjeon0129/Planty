import React from 'react';
import './UserProfilePhoto.scss';
import useUser from 'hooks/useUser';
import { ReactComponent as DefaultProfilePhoto } from 'assets/icons/User.svg';

function UserProfilePhoto() {
	const [user] = useUser();

	if (user?.photo) {
		return (
			<div className="user-profile-photo-container">
				<img src={user?.photo} alt="기본 사용자 프로필 사진" />
			</div>
		);
	}
	return (
		<div className="user-profile-photo-container">
			<DefaultProfilePhoto className="default" width={120} height={120} />
		</div>
	);
}

export default UserProfilePhoto;
