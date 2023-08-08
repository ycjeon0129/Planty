import React from 'react';
import './CustomAlert.scss';

interface ICustomAlertProps {
	title: string;
	desc: string;
	btnTitle: string;
	params: object;
	onAction: (params: object) => void;
	onClose: () => void;
}

function CustomAlert(props: ICustomAlertProps) {
	const { title, desc, btnTitle, params, onAction, onClose } = props;
	// 제목, 내용, 버튼 내용, 인자, confirm 함수, close 함수
	return (
		<div className="popup-overlay">
			<h1>{title}</h1>
			<p>{desc}</p>
			<div className="btn-group">
				<button type="button" onClick={onClose} className="btn-cancel">
					취소
				</button>
				<button
					type="button"
					onClick={() => {
						onAction(params);
						onClose();
					}}
					className="btn-confirm"
				>
					{btnTitle}
				</button>
			</div>
		</div>
	);
}

export default CustomAlert;
