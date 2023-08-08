import React from 'react';
import './Button.scss';
import { useNavigate } from 'react-router-dom'; // useNavigate 가져오기

function Button({ text }: { text: string }) {
	const navigate = useNavigate(); // useNavigate 훅 사용

	const handleClick = () => {
		navigate('/dashboard'); // 버튼 클릭시 '/home' URL로 이동
	};

	return (
		<div>
			<div className="button" onClick={handleClick} role="presentation">
				<span>{text}</span>
			</div>
		</div>
	);
}

export default Button;
