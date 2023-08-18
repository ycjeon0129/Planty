/* eslint-disable react/require-default-props */
import React from 'react';
import './PageTitleButton.scss';
import BackIcon from 'assets/icons/Back.svg';
import CloseIcon from 'assets/icons/Close.svg';
import useMovePage from 'hooks/common/useMovePage';

/**
 * 뒤로가기, 닫기 버튼이 있는 헤더 컴포넌트
 * @param type string, back | close
 * @param text string, 버튼 옆에 있는 텍스트
 */
function PageTitleButton({ type, text, url = '' }: { type: string; text: string; url?: string }) {
	const { movePage, goBack } = useMovePage();

	const icon = type === 'back' ? BackIcon : CloseIcon;
	const handleClick = () => {
		if (url) {
			movePage(url, null);
		} else if (type === 'back') {
			goBack();
		} else {
			goBack();
		}
	};

	return (
		<div className="page-title-button">
			<button type="button" onClick={handleClick}>
				<img src={icon} alt={text} height={14} width={14} />
			</button>
			<h1>{text}</h1>
		</div>
	);
}

export default PageTitleButton;
