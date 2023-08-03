import UserProfilePhoto from 'components/atoms/user/UserProfilePhoto/UserProfilePhoto';
import useUser from 'hooks/useUser';
import React from 'react';
import './UserProfile.scss';

function UserProfile() {
	const [user] = useUser();

	return (
		<div className="user-profile-container">
			<UserProfilePhoto />
			<span>{user?.nickname}</span>
		</div>
	);
}

export default UserProfile;
