import React from 'react';
import './Profile.scss';
import ProfileImg from 'assets/icons/GreenmateProfile.svg';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';

// 그린메이트 활동명, 그린메이트 사진, 그린메이트 소개글
function Profile() {
	return (
		<div className="profile-entire-box">
			<div className="profile-box">
				<div className="profile-left-box">
					<img src={ProfileImg} alt="프로필사진" />
				</div>
				<div className="profile-right-box">
					<div className="greenmate-nickname-box">
						<div className="nickname-button-box">
							<div className="navy-text">그린메이트 활동명</div>
							<IconButton color="primary" aria-label="add to shopping cart">
								<EditIcon />
							</IconButton>
						</div>
						<div className="navy-text nickname">닉네임</div>
					</div>
					<div className="greenmate-intro-box">
						<div className="intro-button-box">
							<div className="navy-text">소개말</div>
							<IconButton color="primary" aria-label="add to shopping cart">
								<EditIcon />
							</IconButton>
						</div>
						<div className="navy-text introduce">
							식물이 자꾸 시들었다구요? 제가 도와드릴게요. 식물 컨설턴트 경력 20년째, 연구 경력 30년째. 저만의 노하우로
							멋진 식물을 선물해드릴게요.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Profile;
