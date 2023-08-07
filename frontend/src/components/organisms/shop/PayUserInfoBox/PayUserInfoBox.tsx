import React, { ReactNode } from 'react';
import './PayUserInfoBox.scss';
//*
function PayUserInfoBox({ children, text }: { children: ReactNode[]; text: string }) {
	return (
		<div>
			<div className="info-box">
				<div className="subject-text">{text}</div>
				<div className="name-email-box">
					<div>{children[0]}</div>
					<div>{children[1]}</div>
				</div>
			</div>
		</div>
	);
}

export default PayUserInfoBox;
