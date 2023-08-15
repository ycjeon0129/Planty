import React from 'react';
import 'react-confirm-alert/src/react-confirm-alert.css';
import './CustomAlert.scss';
import { confirmAlert } from 'react-confirm-alert';

interface ICustomAlertProps {
	title: string;
	desc: string;
	btnTitle: string;
	params: object;
	onAction: (params: object) => void;
}

function CustomAlert(props: ICustomAlertProps) {
	const { title, desc, btnTitle, params, onAction } = props;
	// 제목, 내용, 버튼 내용, 인자, confirm 함수, close 함수
	return confirmAlert({
		customUI: ({ onClose }) => (
			<div className="popup-overlay">
				<h1>{title}</h1>
				<p>{desc}</p>
				<div className="btn-group">
					<button type="button" onClick={onClose} className="btn-cancel">
						<span className="txt-wrap">취소</span>
					</button>
					<button
						type="button"
						onClick={() => {
							onAction(params);
							onClose();
						}}
						className="btn-confirm"
					>
						<span className="txt-wrap">{btnTitle}</span>
					</button>
				</div>
			</div>
		),
	});
}

export default CustomAlert;
