import LocalStorage from 'constants/storage/LocalStorage';
// import jwt_decode from 'jwt-decode';
import { LoginBody, SetUserBody } from 'types/domain/user';
import SessionStorage from 'constants/storage/SessionStorage';
import { instance } from './instance';

/**
 * JWT AccessToken을 해석하여, uid를 추출하는 함수.
 * @returns 현재 로그인된 사용자의 uid
 */
const getUidFromAccessToken = (): number | null => {
	const token = LocalStorage.getItem('AccessToken') as string;
	// const decoded: AccessToken = jwt_decode(token);

	// TODO : 임시 uid
	if (token) return 1;
	return null;
	// return decoded.uid;
};

/**
 * 사용자 회원정보 상세조회
 * @returns 회원 정보 객체
 */
export const findUserApi = async () => {
	const uid = getUidFromAccessToken();
	if (uid) return instance.get(`/users/${uid}`);
	return null;
};

/**
 * 사용자 회원 가입
 * @returns 회원가입 결과
 */
export const setUserApi = async (body: SetUserBody) => {
	const response = await instance.post('/user', body);

	return response;
};

/**
 * 사용자 회원 탈퇴
 * @returns 회원 탈퇴 처리 결과
 */
export const deleteUserApi = async () => {
	const uid = getUidFromAccessToken();
	const response = await instance.delete(`/user/${uid}`);

	return response;
};

/**
 * 사용자 로그인
 * @returns 로그인 처리 결과 (정상 로그인 시, 로그인 사용자 정보 포함)
 */
export const loginApi = async (body: LoginBody) => {
	const response = await instance.post('/user/login', body);

	return response;
};

/**
 * 사용자 로그아웃 (정상 로그아웃 시, 로컬스토리지/세션스토리지 토큰 초기화)
 * @returns 로그아웃 처리 결과
 */
export const logoutApi = async (body: LoginBody) => {
	const response = await instance.post('/user/logout', body).then((res) => {
		if (res.status === 200) {
			LocalStorage.removeItem('accessToken');
			SessionStorage.initUser();
			window.location.replace('/auth');
		}
	});

	return response;
};
