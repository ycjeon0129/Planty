import UserProfilePhoto from 'components/atoms/user/UserProfilePhoto/UserProfilePhoto';
import React from 'react';
import './UserProfile.scss';
import useUser from 'hooks/common/useUser';

function UserProfile() {
	const [user] = useUser();

	return (
		<div className="user-profile-container">
			<UserProfilePhoto />
			<span>{user?.userName}</span>
		</div>
	);
}

export default UserProfile;
