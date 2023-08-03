import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { SUB_MENU_LIST } from 'constants/menu/MypageMenuState';
import MypageSubMenuDetailPageLayout from 'components/layout/mypage/MypageSubMenuDetailPageLayout/MypageSubMenuDetailPageLayout';
import DetailMenuList from '../../components/organisms/mypage/DetailMenuList/DetailMenuList';
import PageTitleButton from '../../components/atoms/common/PageTitleButton/PageTitleButton';

function MypageSubMenuDetailPage() {
	const { menu } = useParams();
	const [key, setKey] = useState<string>(SUB_MENU_LIST[0]);

	const changeDetailList = useCallback(() => {
		if (menu === 'service-history') {
			setKey(SUB_MENU_LIST[0]);
		} else if (menu === 'pay-history') {
			setKey(SUB_MENU_LIST[1]);
		} else if (menu === 'setting') {
			setKey(SUB_MENU_LIST[2]);
		} else {
			setKey(SUB_MENU_LIST[3]);
		}
	}, [menu]);

	useEffect(() => {
		changeDetailList();
	});

	return (
		<MypageSubMenuDetailPageLayout>
			<PageTitleButton type="back" text={key} />
			<DetailMenuList menu={key} />
		</MypageSubMenuDetailPageLayout>
	);
}

export default MypageSubMenuDetailPage;
