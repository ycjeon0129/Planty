import React, { useState } from 'react';
import './Profile.scss';
import ProfileImg from 'assets/icons/GreenmateProfile.svg';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import { useRecoilState } from 'recoil';
import { authState } from 'recoil/store';

// 데이터 받아서 데이터 타입 맞추고 프롭스에 넣어주기
function Profile() {
	const [auth] = useRecoilState(authState);

	// 수정 아이콘 눌렀을 때 토글
	const [nickName, setNickName] = useState(true);
	const [introduceInfo, setIntroduceInfo] = useState(true);

	const nickNameClick = () => {
		setNickName(!nickName);
	};

	const introduceClick = () => {
		setIntroduceInfo(!introduceInfo);
	};

	const handleKeyPressNickName = (event: { key: string }) => {
		if (event.key === 'Enter') {
			nickNameClick();
		}
	};
	const handleKeyPressIntro = (event: { key: string }) => {
		if (event.key === 'Enter') {
			introduceClick();
		}
	};
	// 데이터 집어넣기
	const [nickNameText, setNickNameText] = useState(auth?.nickname as string);
	const [introduceText, setIntroduceText] = useState(auth?.introduce as string);
	// 데이터 수정 정보 뽑아서
	const handleNickNameChange = (event: { target: { value: React.SetStateAction<string> } }) => {
		setNickNameText(event.target.value);
	};

	const handleIntroduceChange = (event: { target: { value: React.SetStateAction<string> } }) => {
		setIntroduceText(event.target.value);
	};

	return (
		<div className="profile-entire-box">
			<div className="profile-box">
				<div className="profile-left-box">
					<img src={auth?.profilePhoto ?? ProfileImg} alt="프로필사진" />
				</div>
				<div className="profile-right-box">
					<div className="greenmate-nickname-box">
						<div className="nickname-button-box">
							<div className="navy-text">그린메이트 활동명</div>
							<IconButton color="primary" aria-label="add to shopping cart" onClick={nickNameClick}>
								<EditIcon />
							</IconButton>
						</div>
						{nickName ? (
							<div className="navy-text nickname">{nickNameText}</div>
						) : (
							<input
								className="navy-text nickname"
								value={nickNameText}
								onChange={handleNickNameChange}
								onKeyPress={handleKeyPressNickName}
							/>
						)}
					</div>
					<div className="greenmate-intro-box">
						<div className="intro-button-box">
							<div className="navy-text">소개말</div>
							<IconButton color="primary" aria-label="add to shopping cart" onClick={introduceClick}>
								<EditIcon />
							</IconButton>
						</div>
						{introduceInfo ? (
							<div className="navy-text introduce">{introduceText}</div>
						) : (
							<textarea
								className="navy-text introduceInput"
								value={introduceText}
								onChange={handleIntroduceChange}
								onKeyPress={handleKeyPressIntro}
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Profile;
